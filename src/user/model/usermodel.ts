
import mongoose ,{Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String
    },
    password:{
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
    },
    cart: [
        {
          itemId: { type: Schema.Types.ObjectId, ref: 'GroceryItem', required: true },
          quantity: { type: Number, required: true },
        },
      ],
},
{
    timestamps: true,
}
);

export const UserModel = mongoose.model('User',UserSchema)

