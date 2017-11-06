import { User } from '../models/user';
import { Success, CustomError, ResponseObjectType } from '../helpers/response';

export class UserController {
    public currentUser(req: any, res: any) {
        return User.findById(req.session.userId).exec((err, user) => {
            if (err) {
                return CustomError(res, 500, err);
            }
            return Success(res, ResponseObjectType.Object, "user", user);
        });
    }

    public get(req: any, res: any) {
        return User.findById(req.params.id).exec((err, user) => {
            if (err) {
                return CustomError(res, 500, err);
            }
            return Success(res, ResponseObjectType.Object, "user", user);
        });
    }

    public index(_, res: any) {
        return User.find().exec((err, users) => {
            if (err) {
                return CustomError(res, 500, err);
            }
            return Success(res, ResponseObjectType.Array, "users", users);
        });
    }

    public createOrEdit(req: any, res: any) {
        if (req.body.password !== req.body.passwordConf) {
            return CustomError(res, 400, 'Passwords do not match.');
        }
        if (this.validateRequiredParams) {
            return User.update({ upsert: true }, this.createResponseObject(req), (err, user) => {
                if (err) {
                    return CustomError(res, 400, err.message);
                }
                return Success(res, ResponseObjectType.Object, "user", user);
            });
        }
        return CustomError(res, 400, 'All fields required.');
    }

    private validateRequiredParams(req: any): boolean {
        return req.body.email && req.body.name && req.body.password
    }

    private createResponseObject(req: any): any {
        return {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin || false
        }
    }
}