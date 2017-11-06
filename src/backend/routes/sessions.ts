import { Router } from 'express';
import { SessionController } from '../controllers/sessions';

var router: Router = Router();

var session = new SessionController();

router
    .post('/login', session.login)
    .delete('/logout', session.logout)

module.exports = router;