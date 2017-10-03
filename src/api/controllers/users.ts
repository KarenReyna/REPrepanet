import { Response, Request } from 'express';
import { User } from '../models/User';

export class UserController {
    public getUser(_: Request, res: Response) {
        return User.find((_: any, data: any) => res.send(data));
    }
}