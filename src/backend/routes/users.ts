import { Router } from 'express';
import { UserController } from '../controllers/users';
import { ResourceController } from '../controllers/resources';
import { CategoryController } from '../controllers/categories';

var router:Router = Router();

var e = new UserController();
var r = new ResourceController();
var cat = new CategoryController();

router
    .get('/profile', e.getUser)
    .post('/register', e.createUser)
    .post('/login', e.loginUser)
    .get('/logout', e.logoutUser)
    .get('/users', e.getUsers)
    .post('/addCategory', cat.createCategory)
    .get('/categories', cat.getCategories)
    .post('/addResource', r.createResource)
    .get('/resources', r.getResources)
    .post('/deleteResource', r.deleteResource)
    .post('/editResource', r.editResource)

module.exports = router;