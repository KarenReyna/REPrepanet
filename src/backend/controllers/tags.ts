import * as Tag from '../models/Tag';
import { Success, CustomError, ResponseObjectType } from '../helpers/response';
import { isUserLoggedInAsync } from '../helpers/currentUser';

export class TagController {
    public async search(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        var query = {};
        if (req.query.q) {
            query = { name: { $regex: req.query.q } };
        }
        return await Tag.find(query, "id name count", (err, tags) => {
            if (err) {
                return CustomError(res, 500, err);
            }
            return Success(res, ResponseObjectType.Array, "tags", tags)
        });
    }

    public async create(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        if (TagController.validateRequiredParams(req)) {
            return await Tag.create(TagController.createResponseObject(req), (err, tag) => {
                if (err) {
                    return CustomError(res, 500, err.message);
                }
                return Success(res, ResponseObjectType.Object, "tag", {
                    _id: tag._id,
                    name: tag.name,
                    count: tag.count
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
        await Tag.findOneAndUpdate({ _id: req.params.id }, 
            TagController.createUpdateObject(req),
            { new: true, fields: "id name count" }, (err, tag) => {
                if (err) {
                    return CustomError(res, 400, err.message);
                }

                if (!tag) {
                    return CustomError(res, 404, "tag not found");
                }

                return Success(res, ResponseObjectType.Object, "tag", {
                    _id: tag._id,
                    name: tag.name,
                    count: tag.count
                });
            });
    }

    private static validateRequiredParams(req: any): boolean {
        return req.body.name;
    }

    private static createResponseObject(req: any): any {
        return {
            name: req.body.name,
            count: req.body.count || 0
        }
    }

    private static createUpdateObject(req: any): any {
        var obj: any = {};
        if (req.body.name != null) {
            obj.name = req.body.name;
        }
        if (req.body.count != null) {
            obj.count = req.body.count;
        }
        return obj
    }
}