import { User } from '../models/User';
import * as response from '../helpers/response';

export class UserController {
    public getUser(req: any, res: any) {
        User.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                response.customError(res, 500, error);
            } else {
                if (user === null) {
                    response.customError(res, 400, 'User empty');
                    return;
                } else {
                    response.success(res, user);
                    return;
                }
            }
        });
    }

    public getUsers(req: any, res: any) {
        User.find()
        .exec(function (error, users) {
            if (error) {
                response.customError(res, 500, error);
                console.log(req);
            } else {
                if (users === null) {
                    response.customError(res, 400, 'No users found');
                    return;
                } else {
                    response.success(res, users);
                    return;
                }
            }
        });
    }

    public createUser(req: any, res: any) {
        console.log("Creating user...")
        if (req.body.password !== req.body.passwordConf) {
            response.customError(res, 400, 'Passwords do not match.');
            return;
        }
        console.log(req.body);
        if (req.body.email &&
            req.body.name &&
            req.body.password &&
            req.body.passwordConf) {

            let priv = req.body.privileges || "";

            var userData = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                passwordConf: req.body.passwordConf,
                privileges: priv.split(",")
            }

            User.create(userData, function (err, user) {
                if (err) {
                    response.customError(res, 400, err.message);
                } else {
                    response.success(res, user);
                }
            });

        } else {
            response.customError(res, 400, 'All fields required.');
        }
    }

    public loginUser(req: any, res: any) {
        if (req.body.email &&
            req.body.password) {
                console.log(req.session);
                User.authenticate(req.body.email, req.body.password, function (error, user) {
                if (error || !user) {
                    response.customError(res, 400, 'Wrong email or password.');
                    return;
                } else {
                    response.success(res, user);
                    return;
                }
            });
        } else {
            response.customError(res, 400, 'All fields required.');
            return;
        }
    }

    //TODO: Figure out logout
    public logoutUser(req: any, res: any) {
        if (req.session) {
            // delete session object
            req.session.destroy(function (err) {
                if (err) {
                    console.log("Error logout");
                    response.customError(res, 500, err.message);
                    return;
                } else {
                    // res.redirect("/");
                    console.log("Ending session");
                    response.success(res, {message: 'Logout successful'});
                    return;
                }
            });
        }
    }
}