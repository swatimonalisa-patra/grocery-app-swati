import express from 'express';
import {OrderModel} from '../model/ordermodel'
import { UserModel } from '../../user/model/usermodel';
import { GroceryItemModel } from '../../groceryItem/model/groceryitemmodel';
class OrderController{
    
    placeOrder = async (request: express.Request, response: express.Response) => {
        try {
          const { userId, items } = request.body;
      
          // Validate that the user exists
          const userExists = await UserModel.findById(userId);
          if (!userExists) {
            return response.status(404).json({ message: 'User not found' });
          }
      
          // Validate that each item in the order exists
          const itemPromises = items.map(async (item: any) => {
            const groceryItem = await GroceryItemModel.findById(item.itemId);
            if (!groceryItem) {
              return response.status(404).json({ message: `Grocery item with id ${item.itemId} not found` });
            }
          });
      
          await Promise.all(itemPromises);
      
          // Calculate the total amount
          const totalAmount = await Promise.all(
            items.map(async (item: any) => {
              const groceryItem = await GroceryItemModel.findById(item.itemId);
              return groceryItem ? (groceryItem.price || 0) * item.quantity : 0;
            })
          ).then((amounts) => amounts.reduce((total, amount) => total + amount, 0));
      
          // Create a new order
          const newOrder = new OrderModel({
            userId,
            items,
            totalAmount,
            status: 'Pending', // You may set the initial status as 'Pending'
          });
      
          // Save the new order
          await newOrder.save();
      
          return response.status(201).json({ message: 'Order placed successfully', data: newOrder });
        } catch (error) {
          console.error('Error placing order:', error);
          return response.sendStatus(500);
        }
      };

    
}

export default new OrderController();

