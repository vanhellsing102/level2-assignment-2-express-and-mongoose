import { Request, Response } from "express"
import { OrderServices } from "./order.service";

const createOrder = async(req: Request, res: Response) =>{
    try{
        const {order} = req.body;
        const result = await OrderServices.createOrderInDB(order);
        res.status(200).json({
            success: true,
            message: "Order created successfully",
            data: result
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        })
    }
}
const getAllOrders = async(req: Request, res: Response) =>{
    try{
        const result = await OrderServices.getAllOrdersFromDB();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
            data: result
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        })
    }
}
const getUserOrders = async(req: Request, res: Response) =>{
    try{
        const {email} = req.query;
        const result = await OrderServices.getUserOrdersFromDB(email as string);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email",
            data: result
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        })
    }
}
export const OrderControllers = {
    createOrder,
    getAllOrders,
    getUserOrders
}