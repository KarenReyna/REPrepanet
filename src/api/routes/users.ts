import {Router} from 'express';
import { UserController } from '../controllers/users';

export function usersRoutes(router: Router) {
    var e = new UserController();
    router
        .get('/users', e.getUser);
}