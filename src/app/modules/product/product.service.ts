import { TProduct } from "./product.interface";
import ProductModel from "./product.model"

const addProductInDB = async(product: TProduct) =>{
    const result = await ProductModel.create(product);
    return result;
}
const getAllProductsFromDB = async() =>{
    const result = await ProductModel.find();
    return result;
}
const getSingleProductFromDB = async(productId: string) =>{
    const product = await ProductModel.findOne({_id: productId});
    return product;
}
const updateProductInDB = async(productId: string, productData: TProduct) =>{
    const result = await ProductModel.findByIdAndUpdate(productId, productData, {
        new: true,
        runValidators: true
    });
    return result;
}
const deleteProductFromDB = async(productId: string) =>{
    const result = await ProductModel.findByIdAndDelete(productId);
    return result;
}
const searchProductFromDB = async(searchTerm: string) =>{
    const result = await ProductModel.find({
        $or: [
            {name: {$regex: searchTerm, $options: "i"}},
            {description: {$regex: searchTerm, $options: "i"}}
        ]
    })
    return result;
}
export const ProductServices = {
    addProductInDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductInDB,
    deleteProductFromDB,
    searchProductFromDB
}