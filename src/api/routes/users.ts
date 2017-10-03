import { Router } from 'express';
import { UserController } from '../controllers/users';

export function usersRoutes(router: Router) {
    var e = new UserController();
    router
        .get('/', function() {
            console.log('home');
        })
        .get('/profile', e.getUser)
        .post('/register', e.createUser)
        .post('/login', e.loginUser)
		.get('/logout', e.logoutUser);
}