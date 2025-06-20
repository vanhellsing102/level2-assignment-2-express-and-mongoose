import { z } from "zod";
const OrderValidation = z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number(),
    quantity: z.number()
})

export default OrderValidation;