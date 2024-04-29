import express from 'express';
import {UserModel} from '../model/usermodel'

class UserController{
    
    

    createUser = async (request: express.Request, response: express.Response) => {
        try{
            const {name,password,email,address,cart} = request.body;

            const user = new UserModel({
                name,password,email,address,cart
            });
            await user.save();
            return response.status(201).json({message:"User Created",data:user})
        }catch(error){
            return response.sendStatus(400)
        }
    }

   
}

export default new UserController();

