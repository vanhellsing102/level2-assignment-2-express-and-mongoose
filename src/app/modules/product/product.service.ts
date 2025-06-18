import { TProduct } from "./product.interface";
import ProductModel from "./product.model"

const addProductInDB = async(product: TProduct) =>{
    const result = await ProductModel.create(product);
    return result;
}

export const ProductServices = {
    addProductInDB,
}