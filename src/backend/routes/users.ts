import { Router } from 'express';
import { UserController } from '../controllers/users';

var router: Router = Router();

var users = new UserController();

router
    .get('/', users.index)
    .get('/:id', users.get)
    .get('/profile', users.currentUser)    
    .post('/update', users.createOrEdit)

module.exports = router;