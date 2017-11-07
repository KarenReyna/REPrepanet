import { Router } from 'express';
import { TagController } from '../controllers/tags';

var router: Router = Router();

var tag = new TagController();

router
    .post('/', tag.search)
    // .delete('/new', tag.create)
    // .get('/:id/edit', tag.edit)

module.exports = router;