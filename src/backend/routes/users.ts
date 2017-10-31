import { Router } from 'express';
import { UserController } from '../controllers/users';
import { CollectionController } from '../controllers/collections';

var router:Router = Router();

var e = new UserController();
var c = new CollectionController();

router
    .get('/profile', e.getUser)
    .post('/register', e.createUser)
    .post('/login', e.loginUser)
    .get('/logout', e.logoutUser)
    .get('/users', e.getUsers)
    .post('/addCollection', c.createCollection)
    .get('/getCollections', c.getCollections)
    .get('/deleteUser', e.deleteUser)

module.exports = router;