import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidation from "./product.validation";

const addProduct = async(req: Request, res: Response): Promise<void> =>{
    try {
        const {product} = req.body;
        const validatedProductData = productValidation.safeParse(product);
        if (!validatedProductData.success) {
            res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: validatedProductData.error.format(),
        });
    }
        const result = await ProductServices.addProductInDB(validatedProductData.data);
        res.status(200).json({
            success: true,
            message: "Product added successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        })
    }
}
const getAllProducts = async(req: Request, res: Response) =>{
    try{
        const result = await ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Products retrived successfully",
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

export const ProductControllers = {
    addProduct,
    getAllProducts,
}