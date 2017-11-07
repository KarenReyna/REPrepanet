import { User } from '../models/user';
import { Success, CustomError, ResponseObjectType } from '../helpers/response';
import { isUserLoggedInAsync } from '../helpers/currentUser';

// TODO: Figure out login and logout with client/server side
export class SessionController {
    public async login(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 401, "User already logged in.");
        }
        if (SessionController.validateRequiredParams(req)) {
            var error: any = null;
            var user = await User.authenticate(req.body.email, req.body.password, (err) => {
                if (err) error = err;
            });
            if (error) {
                return CustomError(res, 400, error.message);
            }

            req.session.auth_token = user.id;
            return Success(res, ResponseObjectType.Object, "user", {
                id: user.id,
                name: user.name,                
                email: user.email
            });
        }
        return CustomError(res, 400, 'All fields required.');
    }

    public async logout(req: any, res: any) {
        var loggedIn = await isUserLoggedInAsync(req);
        if (!loggedIn) {
            return CustomError(res, 403, "Please login to access.");
        }
        if (!!req.session.auth_token) {
            req.session.auth_token = null;
            return Success(res, ResponseObjectType.Object, "message", 'Logout successful');
        }
    }

    private static validateRequiredParams(req: any): boolean {
        return req.body.email && req.body.password
    }
}