import {Router} from 'express';
import {UserController} from '../controllers/users';

var router:Router = Router();

var e = new UserController();

router
    .get('/profile', e.getUser)
    .post('/register', e.createUser)
    .post('/login', e.loginUser)
    .get('/logout', e.logoutUser);

module.exports = router;
