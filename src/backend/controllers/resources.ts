import * as Resource from '../models/resource';
import * as Category from '../models/category';
import * as Tag from '../models/tag';
import { Success, CustomError, ResponseObjectType } from '../helpers/response';
import { isUserLoggedInAsync, getCurrentUserAsync } from '../helpers/currentUser';

export class ResourceController {
    public async create(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        if (ResourceController.validateRequiredParams(req)) {
            var resourceObject = await ResourceController.createResponseObject(req);
            return await Resource.create(resourceObject, (err, resource: any) => {
                if (err) {
                    return CustomError(res, 500, err.message);
                }
                return Success(res, ResponseObjectType.Object, "resource", {
                    id: resource.id,
                    title: resource.title,
                    description: resource.description,
                    url: resource.url,
                    imageurl: resource.imageurl,
                    tags: resource.tags,
                    category: resource.category,
                    updated_by: resource.updated_by
                });
            });
        }
        return CustomError(res, 400, 'All fields required.');
    }

    public async edit(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        var resourceObject = await ResourceController.createUpdateObject(req);
        await Resource.findOneAndUpdate({ _id: req.params.id },
            resourceObject,
            { new: true, fields: "id title description url image tags category updated_by type" },
            (err, resource) => {
                if (err) {
                    return CustomError(res, 400, err.message);
                }

                if (!resource) {
                    return CustomError(res, 404, "resource not found");
                }

                return Success(res, ResponseObjectType.Object, "resource", resource);
            });
    }

    public async index(_: any, res: any) {
        return await Resource.find({}, "id title description url image tags category updated_by type").exec((err, resources) => {
            if (err) {
                return CustomError(res, 500, err.message);
            }
            return Success(res, ResponseObjectType.Array, "resources", resources);
        });
    }

    public async delete(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        return await Resource.findByIdAndRemove(req.params.id, (err, resource) => {
            if (err) {
                return CustomError(res, 500, err.message);
            }
            return Success(res, ResponseObjectType.Object, "resource", resource);
        });
    }

    private static validateRequiredParams(req: any): boolean {
        return req.body.title && req.body.description && req.body.url && req.body.type; //&& req.body.imageurl
    }

    private static async createResponseObject(req: any): Promise<any> {
        let imageurl = req.body.imageurl || "";
        var category = await Category.findById(req.body.category_id, 'title description').exec();
        var currentUser = await getCurrentUserAsync(req);
        let tags = [];
        if (req.body.tags != null) {
            tags = await Tag.findOrCreateBatch(req.body.tags.split(','));
        }

        return {
            title: req.body.title,
            description: req.body.description,
            url: req.body.url,
            image: imageurl,
            tags: tags,
            category: category,
            type: req.body.type,
            updated_by: [{
                user: {
                    title: currentUser.title,
                    email: currentUser.email
                },
                at: Date.now()
            }]
        }
    }

    private static async createUpdateObject(req: any): Promise<any> {
        var currentUser = await getCurrentUserAsync(req);

        var obj: any = {};
        if (req.body.title != null) {
            obj.title = req.body.title;
        }
        if (req.body.description != null) {
            obj.description = req.body.description;
        }
        if (req.body.url != null) {
            obj.url = req.body.url;
        }
        if (req.body.imageurl != null) {
            obj.image = req.body.imageurl;
        }
        if (req.body.tags != null) {
            obj.tags = await Tag.findOrCreateBatch(req.body.tags.split(','));
        }
        if (req.body.category_id != null) {
            obj.category = await Category.findById(req.body.category_id, 'title description').exec();
        }
        if (req.body.type != null) {
            obj.type = req.body.type;
        }

        return {
            $set: {
                ...obj
            },
            $push: {
                updated_by: {
                    user: {
                        title: currentUser.title,
                        email: currentUser.email
                    },
                    at: Date.now()
                }
            }
        }
    }
}