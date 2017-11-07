import { Tag } from '../models/Tag';
import { Success, CustomError, ResponseObjectType } from '../helpers/response';
import { isUserLoggedInAsync } from '../helpers/currentUser';

export class TagController {
    public async search(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        return await Tag.find({ "name": { $regex: req.body.substr } }, (err, tags) => {
            if (err) {
                return CustomError(res, 500, err);
            }
            return Success(res, ResponseObjectType.Array, "tags", tags)
        });
    }

    public async createOrEdit(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        if (this.validateRequiredParams(req)) {
            return await Tag.update({ upsert: true }, this.createResponseObject(req), (err, tag) => {
                if (err) {
                    return CustomError(res, 500, err.message);
                }
                return Success(res, ResponseObjectType.Object, "tag", tag);
            });
        }
        return CustomError(res, 400, 'All fields required.');
    }

    private validateRequiredParams(req: any): boolean {
        return req.body.name;
    }

    private createResponseObject(req: any): any {
        return {
            name: req.body.name,
            count: req.body.count || 0
        }
    }
}