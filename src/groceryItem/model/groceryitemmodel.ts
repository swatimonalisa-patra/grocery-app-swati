
import mongoose from "mongoose";

const GroceryItemSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    price:{
        type: Number
    },
    quantityAvailable:{
        type: Number,
    },
},
{
    timestamps: true,
}
);

export const GroceryItemModel = mongoose.model('GroceryItem',GroceryItemSchema)

