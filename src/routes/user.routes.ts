import express from 'express';
import controller from '../controllers/controller';
import log from '../config/log';

/** 
 * Creates routes to be used from app.ts, and their
 * corresponding functions
 */

const router = express.Router();

router.get('/get-info', controller.getInfo);
router.get('/authorize', controller.authorize);

router.post('/create-user', controller.createUser);
router.post('/login', controller.login);

router.delete('/delete-user/:id', controller.deleteUser);
router.put('/update-user/:id', controller.updateUser);


export = router;