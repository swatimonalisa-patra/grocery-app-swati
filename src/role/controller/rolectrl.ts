import express from 'express';
import {RoleModel} from '../model/rolemodel'
class RoleController{
    
   

    createrole = async (request: express.Request, response: express.Response) => {
        try{
            const {rolename,roleid} = request.body;

            const role = new RoleModel({
                rolename,roleid
            });
            await role.save();
            return response.status(201).json({message:"Role Created",data:role})
        }catch(error){
            return response.sendStatus(400)
        }
    }

   
}

export default new RoleController();

