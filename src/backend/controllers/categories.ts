import { Category } from '../models/category';
import { Success, CustomError, ResponseObjectType } from '../helpers/response';
import { User } from '../models/user';

export class CategoryController {
    public createOrEdit(req: any, res: any) {
        if (this.validateRequiredParams(req)) {
            return Category.update({ upsert: true }, this.createResponseObject(req), (err, category) => {
                if (err) {
                    return CustomError(res, 500, err.message);
                }
                return Success(res, ResponseObjectType.Object, "category", category);
            });
        }
        return CustomError(res, 400, 'All fields required.');
    }

    public index(_: any, res: any) {
        return Category.find().exec((err, categories) => {
            if (err) {
                return CustomError(res, 500, err);
            }
            return Success(res, ResponseObjectType.Array, "categories", categories);
        });
    }

    private validateRequiredParams(req: any): boolean {
        return req.body.name && req.body.description;
    }

    private createResponseObject(req: any): any {
        var currentUser = User.findById(req.session.userId, 'name email').exec();        
        return {
            name: req.body.name,
            description: req.body.description,
            updated_by: {
                $push: {
                    user: currentUser,
                    at: Date.now()
                }
            }
        }
    }
}