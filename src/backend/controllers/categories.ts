import { Category } from '../models/category';
import { Success, CustomError, ResponseObjectType } from '../helpers/response';
import { isUserLoggedInAsync, getCurrentUserAsync, currentUserIsAdminAsync } from '../helpers/currentUser';

export class CategoryController {
    public async create(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        var isAdmin = await currentUserIsAdminAsync(req);
        if (!isAdmin) {
            return CustomError(res, 403, "You are not an admin.")
        }
        if (CategoryController.validateRequiredParams(req)) {
            var categoryObject = await CategoryController.createResponseObject(req);
            return await Category.create(categoryObject, (err, category: any) => {
                if (err) {
                    return CustomError(res, 500, err.message);
                }
                return Success(res, ResponseObjectType.Object, "category", {
                    id: category.id,
                    name: category.name,
                    updated_by: category.updated_by,
                    description: category.description
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
        var isAdmin = await currentUserIsAdminAsync(req);
        if (!isAdmin) {
            return CustomError(res, 403, "You are not an admin.")
        }
        var categoryObject = await CategoryController.createUpdateObject(req);        
        await Category.findOneAndUpdate({ _id: req.params.id }, 
            categoryObject,
            { new: true, fields: "id name description updated_by" }, (err, category) => {
                if (err) {
                    return CustomError(res, 400, err.message);
                }

                if (!category) {
                    return CustomError(res, 404, "category not found");
                }

                return Success(res, ResponseObjectType.Object, "user", category);
            });
    }

    public async index(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        return await Category.find({}, "id name description updated_by").exec((err, categories) => {
            if (err) {
                return CustomError(res, 500, err);
            }
            return Success(res, ResponseObjectType.Array, "categories", categories);
        });
    }

    private static validateRequiredParams(req: any): boolean {
        return req.body.name && req.body.description;
    }

    private static async createResponseObject(req: any): Promise<any> {
        var currentUser = await getCurrentUserAsync(req);
        return {
            name: req.body.name,
            description: req.body.description,
            updated_by: [{
                user: { 
                    name: currentUser.name,
                    email: currentUser.email
                },
                at: Date.now()
            }]
        }
    }

    private static async createUpdateObject(req: any): Promise<any> {
        var currentUser = await getCurrentUserAsync(req);
        var obj: any = {};
        if (req.body.name) {
            obj.name = req.body.name;
        }
        if (req.body.description) {
            obj.description = req.body.description;
        }

        return { 
            $set: {
                ...obj
            },
            $push: {
                updated_by: {
                    user: {
                        name: currentUser.name,
                            email: currentUser.email
                    },
                    at: Date.now()
                }
            }
        }
    }
}