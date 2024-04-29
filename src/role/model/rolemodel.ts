
import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  
  rolename: { type: String},
  roleid: { type: Number},
},
{
    timestamps: true,
}
);

export const RoleModel = mongoose.model('Role',RoleSchema)

