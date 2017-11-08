import * as User from '../models/user';
import { Success, CustomError, ResponseObjectType } from '../helpers/response';
import { isUserLoggedInAsync, getCurrentUserAsync, currentUserIsAdminAsync } from '../helpers/currentUser';

export class UserController {
    public async currentUser(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        var user = await getCurrentUserAsync(req);
        if (!user) {
            return CustomError(res, 500, "No user logged in.")
        }
        return Success(res, ResponseObjectType.Object, "user", user)
    }

    public async get(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        var isAdmin = await currentUserIsAdminAsync(req);
        if (!isAdmin) {
            return CustomError(res, 403, "You are not an admin.")
        }
        return await User.findById(req.params.id, "id name email isAdmin").exec((err, user) => {
            if (err) {
                return CustomError(res, 500, err);
            }
            return Success(res, ResponseObjectType.Object, "user", user);
        });
    }

    public async index(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        var isAdmin = await currentUserIsAdminAsync(req);
        if (!isAdmin) {
            return CustomError(res, 403, "You are not an admin.")
        }
        return await User.find({}, "id name email isAdmin").exec((err, users) => {
            if (err) {
                return CustomError(res, 500, err);
            }
            return Success(res, ResponseObjectType.Array, "users", users);
        });
    }

    public async create(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        var isAdmin = await currentUserIsAdminAsync(req);
        if (!isAdmin) {
            return CustomError(res, 403, "You are not an admin.")
        }
        if (UserController.validateRequiredParams(req)) {
            if (req.body.password !== req.body.passwordConf) {
                return CustomError(res, 400, 'Password and password confirmation do not match.');
            }

            return await User.create(UserController.createResponseObject(req), (err, user: any) => {
                if (err) {
                    return CustomError(res, 500, err.message);
                }
                return Success(res, ResponseObjectType.Object, "user", {
                    id: user.id,
                    name: user.name,                
                    email: user.email
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
        await User.findOneAndUpdate({ _id: req.params.id }, UserController.createUpdateObject(req),
            { new: true, fields: "id name email isAdmin" }, (err, user) => {
                if (err) {
                    return CustomError(res, 400, err.message);
                }

                if (!user) {
                    return CustomError(res, 404, "user not found");
                }

                return Success(res, ResponseObjectType.Object, "user", user);
            });
    }

    private static validateRequiredParams(req: any): boolean {
        return req.body.email && req.body.name && req.body.password
    }

    private static createResponseObject(req: any): any {
        return {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin
        }
    }

    private static createUpdateObject(req: any): any {
        var obj: any = {};
        if (req.body.name != null) {
            obj.name = req.body.name;
        }
        if (req.body.email != null) {
            obj.email = req.body.email;
        }
        if (req.body.password != null) {
            obj.password = req.body.password;
        }
        if (req.body.isAdmin != null) {
            obj.isAdmin = req.body.isAdmin;
        }
        return obj
    }        
}