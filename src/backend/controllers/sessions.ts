import { User } from '../models/user';
import { Success, CustomError, ResponseObjectType } from '../helpers/response';

// TODO: Figure out login and logout with client/server side
export class SessionController {
    public login(req: any, res: any) {
        if (this.validateRequiredParams) {
            User.authenticate(req.body.email, req.body.password, function (error, user) {
                if (error || !user) {
                    return CustomError(res, 400, 'Wrong email or password.');
                }
                return Success(res, ResponseObjectType.Object, "user", user);
            });
        }
        return CustomError(res, 400, 'All fields required.');
    }

    public logout(req: any, res: any) {
        if (req.session) {
            req.session.destroy(function (err) {
                if (err) {
                    return CustomError(res, 500, err.message);
                }
                return Success(res, ResponseObjectType.Object, "message", 'Logout successful');
            });
        }
    }

    private validateRequiredParams(req: any): boolean {
        return req.body.email && req.body.password
    }
}