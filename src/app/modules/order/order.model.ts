import { model, Schema, CallbackError } from "mongoose";
import { TOrder } from "./order.interface";
import ProductModel from "../product/product.model";

const orderSchema = new Schema<TOrder>({
    email: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

orderSchema.pre("save", async function(next){
    try{
        const product = await ProductModel.findById(this.productId);
    if(!product){
        throw new Error("Product not found");
    }
    if(product.inventory.quantity <= 0 || product.inventory.inStock === false){
        throw new Error("Insufficient quantity available in inventory");
    }
    if(product.inventory.quantity < this.quantity){
        throw new Error(`${this.quantity} in bigger than stock`);
    }
    next();
    }catch(error){
        console.log(error);
        next(error as CallbackError);
    }
})

orderSchema.post("save", async function(doc, next){
    try{
        const product = await ProductModel.findById(doc.productId);
        if(!product){
            throw new Error("Product is not found");
        }
        product.inventory.quantity -= doc.quantity;
        if(product.inventory.quantity === 0){
            product.inventory.inStock = false
        }
        await product.save();
        next();
    }catch(error){
        console.log(error);
        next(error as CallbackError);
    }
})

const OrderModel = model<TOrder>("order", orderSchema);
export default OrderModel;