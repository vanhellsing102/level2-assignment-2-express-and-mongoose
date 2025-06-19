import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post('/add-product', ProductControllers.addProduct);
router.get('/searchProduct', ProductControllers.searchProduct);
router.get('/', ProductControllers.getAllProducts);
router.get('/:productId', ProductControllers.getSingleProduct);
router.put('/:productId', ProductControllers.updateProduct);
router.delete('/:productId', ProductControllers.deleteProduct);

export const ProductRoute = router;