import { model, Schema, Types } from "mongoose";
import { OrderStatus } from "../constants/order_status";
import { Food, FoodSchema } from "./food.model";

export interface OrderItem{
    food:Food;
    price:number;
    quantity:number;
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        food:FoodSchema,
        price:{type:Number,required:true},
        quantity:{type:Number,required:true}
    }
);

export interface Order{
    id:string;
    items:OrderItem[];
    totalPrice:number;
    name:string;
    address:string;
    paymentId:string;
    status:OrderStatus;
    user:Types.ObjectId;
    createdAt:Date;
    updatedAt:Date;
  }

  const orderSchema = new Schema<Order>({

    name: {type: String, required: true},
    address: {type: String, required: true},
    paymentId: {type: String},
    totalPrice: {type: Number, required: true},
    items:[OrderItemSchema],
    status: {type: String, default: OrderStatus.NEW},
    user: {type: Schema.Types.ObjectId, required: true}
  },{
    timestamps:true,
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    }
    //id instead of _id
  })

  export const OrderModel = model('order',orderSchema);