import express from 'express';
import roleController from '../controller/rolectrl';

const router = express.Router();

router.post('/addrole', roleController.createrole);

export default router;
