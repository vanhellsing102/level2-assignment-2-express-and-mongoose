import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidation from "./product.validation";

const addProduct = async(req: Request, res: Response) =>{
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
            message: "Products fetched successfully",
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
const getSingleProduct = async(req: Request, res: Response) =>{
    try{
        const {productId} = req.params;
        const result = await ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
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
const updateProduct = async(req: Request, res: Response) =>{
    try{
        const {productId} = req.params;
        const {product} = req.body;
        const result = await ProductServices.updateProductInDB(productId, product);
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
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
const deleteProduct = async(req: Request, res: Response) =>{
    try{
        const {productId} = req.params;
        await ProductServices.deleteProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: null
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error
        })
    }
}
const searchProduct = async(req: Request, res: Response) =>{
    try{
        const {searchTerm} = req.query;
        const result = await ProductServices.searchProductFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
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
    getSingleProduct,
    updateProduct,
    deleteProduct,
    searchProduct
}