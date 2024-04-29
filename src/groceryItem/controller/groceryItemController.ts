import express from 'express';
import {GroceryItemModel} from '../model/groceryitemmodel'
class GroceryController{
    
    getAllGroceryitems = async (request: express.Request, response: express.Response) => {
        try{
            const employees = await GroceryItemModel.find()
            return response.status(200).json({data:employees})
        }catch(error){
            return response.sendStatus(400)
        }
    }

    getGroceryItem = async (request: express.Request, response: express.Response) => {
        try{
            const {id} = request.params;
            const employee = await GroceryItemModel.findById(id)
            return response.status(200).json({data:employee})
        }catch(error){
            return response.sendStatus(400)
        }
    }


    createGrocery = async (request: express.Request, response: express.Response) => {
        try{
            const {name,description,price,quantityAvailable} = request.body;

            const employee = new GroceryItemModel({
              name,description,price,quantityAvailable
            });
            await employee.save();
            return response.status(201).json({message:"GroceryItem Created",data:employee})
        }catch(error){
            return response.sendStatus(400)
        }
    }

    updateGrocery = async (request: express.Request, response: express.Response) => {
        try{
            const {id} = request.params;
            const {name,price} = request.body;

            const employee = await GroceryItemModel.findById(id);
            if(employee){
                employee.name = name;
                employee.price = price;
                await employee.save();
                return response.status(200).json({message:"GroceryItem Updated",data:employee}) 
            }
            return response.sendStatus(400)
            
        }catch(error){
            return response.sendStatus(400)
        }
    }


    updateGroceryInventory = async (
        request: express.Request,
        response: express.Response
      ) => {
        try {
          const { id } = request.params;
          const { quantityAvailable } = request.body;
      
          const groceryItem = await GroceryItemModel.findById(id);
      
          if (groceryItem) {
            groceryItem.quantityAvailable = quantityAvailable;
            await groceryItem.save();
      
            return response.status(200).json({
              message: 'GroceryItem inventory updated',
              data: groceryItem,
            });
          }
      
          return response.sendStatus(404);
        } catch (error) {
          console.error('Error updating grocery item inventory:', error);
          return response.sendStatus(500);
        }
      };

    deleteGrocery = async (request: express.Request, response: express.Response) => {
        try{
            const {id} = request.params;
            await GroceryItemModel.findByIdAndDelete({_id:id});
            return response.status(200).json({message:"GroceryItem Deleted"})
        }catch(error){
            return response.sendStatus(400)
        }
    }
}

export default new GroceryController();

