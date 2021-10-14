import express from 'express';
import controller from '../controllers/user-controller';
import log from '../config/log';

/** 
 * Creates routes to be used from app.ts, and call their
 * corresponding functions
 */

const router = express.Router();

/** 
 * Routes for testing with throw away login page need to update
 * after embedded into Topi project
 */

router.get('/get-info', controller.getInfo);
router.post('/create-user', controller.createUser);
router.post('/login', controller.login);
router.delete('/delete-user/:id', controller.deleteUser);
router.put('/update-user/:id', controller.updateUser);


export = router;