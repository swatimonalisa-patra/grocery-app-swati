import express from 'express';
import OrderController from '../controller/orderController';

const router = express.Router();


router.post('/placeOrder', OrderController.placeOrder);
// router.get('/addUser', UserController.createUser);


export default router;
