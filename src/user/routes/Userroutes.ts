import express from 'express';
import UserController from '../controller/UserController';

const router = express.Router();


router.post('/addUser', UserController.createUser);
// router.get('/addUser', UserController.createUser);


export default router;
