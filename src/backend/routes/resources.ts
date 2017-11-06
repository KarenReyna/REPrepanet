import { Router } from 'express';
import { ResourceController } from '../controllers/resources';

var router: Router = Router();

var resources = new ResourceController();

router
    .get('/', resources.index)
    .post('/update', resources.createOrEdit)
    .delete('/:id/delete', resources.delete)

module.exports = router;