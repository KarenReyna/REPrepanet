import { Resource } from '../models/resource';
import { Category } from '../models/category';
import { User } from '../models/user';
import { Tag } from '../models/tag';
import { Success, CustomError, ResponseObjectType } from '../helpers/response';

export class ResourceController {
    public createOrEdit(req: any, res: any) {
        if (this.validateRequiredParams(req)) {
            return Resource.update({ upsert: true }, this.createResponseObject(req), (err, resource) => {
                if (err) {
                    return CustomError(res, 500, err.message);
                }
                return Success(res, ResponseObjectType.Object, "resource", resource);
            });
        }
        return CustomError(res, 400, 'All fields required.');
    }

    public index(_: any, res: any) {
        return Resource.find().exec((err, resources) => {
            if (err) {
                return CustomError(res, 500, err.message);
            }
            return Success(res, ResponseObjectType.Array, "resources", resources);
        });
    }

    public delete(req: any, res: any) {
        return Resource.findByIdAndRemove(req.params.id, (err, resource) => {
            if (err) {
                return CustomError(res, 500, err.message);
            }
            return Success(res, ResponseObjectType.Object, "resource", resource);
        });
    }

    private validateRequiredParams(req: any): boolean {
        return req.body.name && req.body.description && req.body.url; //&& req.body.imageurl && req.body.tags;
    }

    private createResponseObject(req: any): any {
        let imageurl = req.body.imageurl || "";
        var category = Category.findById(req.body.category_id, 'name description').exec();
        var currentUser = User.findById(req.session.userId, 'name email').exec();
        let tags = [];
        if (req.body.tags) {
            tags = Tag.findOrCreateBatch(req.body.tags.split(','));
        }

        return {
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
            imageurl: imageurl,
            tags: tags,
            category: category,
            updated_by: {
                $push: {
                    user: currentUser,
                    at: Date.now()
                }
            }
        }
    }
}