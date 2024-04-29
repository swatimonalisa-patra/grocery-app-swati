
import mongoose ,{Schema } from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      itemId: { type: Schema.Types.ObjectId, ref: 'GroceryItem', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number},
  status: { type: String},
},
{
    timestamps: true,
}
);

export const OrderModel = mongoose.model('Order',OrderSchema)

