import { Router } from 'express';
import { UserController } from '../controllers/users';
import { CollectionController } from '../controllers/collections';
import { ResourceController } from '../controllers/resources';
import { CategoryController } from '../controllers/categories';

var router:Router = Router();

var e = new UserController();
var c = new CollectionController();
var r = new ResourceController();
var cat = new CategoryController();

router
    .get('/profile', e.getUser)
    .post('/register', e.createUser)
    .post('/login', e.loginUser)
    .get('/logout', e.logoutUser)
    .get('/users', e.getUsers)
    .post('/addCollection', c.createCollection)
    .post('/addCategory', cat.createCategory)
    .get('/categories', cat.getCategories)
    .get('/getCollections', c.getCollections)
    .post('/addResource', r.createResource)

module.exports = router;