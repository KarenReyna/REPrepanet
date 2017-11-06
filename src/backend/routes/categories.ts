import { Router } from 'express';
import { CategoryController } from '../controllers/categories';

var router: Router = Router();

var categories = new CategoryController();

router
    .get('/', categories.index)
    .post('/update', categories.createOrEdit)

module.exports = router;