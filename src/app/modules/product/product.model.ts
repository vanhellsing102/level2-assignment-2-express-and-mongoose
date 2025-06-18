import { model, Schema } from "mongoose";
import { TInventory, TProduct, TVariants } from "./product.interface";

const variantsSchema = new Schema<TVariants>({
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})
const inventorySchema = new Schema<TInventory>({
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
})

const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: {
            values: ["electronic", "beauty", "food", "toy", "book"],
            message: "{VALUE} is not semilar"
        },
        required: true
    },
    tags: {
        type: [String]
    },
    variants: {
        type: [variantsSchema],
        default: []
    },
    inventory: {
        type: inventorySchema
    }
})

const ProductModel = model<TProduct>('product', productSchema);
export default ProductModel;