import express from 'express';
import groceryItemController from '../controller/groceryItemController';

const router = express.Router();

router.get('/Groceryitems', groceryItemController.getAllGroceryitems);
router.get('/Groceryitem/:id', groceryItemController.getGroceryItem);
router.post('/addGrocery', groceryItemController.createGrocery);
router.put('/updateGrocery/:id', groceryItemController.updateGrocery);
router.put('/updateInventory/:id', groceryItemController.updateGroceryInventory);
router.delete('/deleteGrocery/:id', groceryItemController.deleteGrocery);

export default router;
