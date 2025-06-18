import { z } from "zod"

const productValidation = z.object({
    name: z.string({required_error: "name is required", invalid_type_error: "name is string"}),
    description: z.string(),
    price: z.number(),
    category: z.enum(["electronic", "beauty", "food", "toy", "book"]),
    tags: z.array(z.string()),
    variants: z.array(z.object({
        type: z.string(),
        value: z.string()
    })),
    inventory: z.object({
        quantity: z.number(),
        inStock: z.boolean()
    })
})

export default productValidation;