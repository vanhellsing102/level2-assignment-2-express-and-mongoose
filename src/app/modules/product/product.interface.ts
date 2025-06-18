
export type TVariants = {
    type: string,
    value: string
};

export type TInventory = {
    quantity: number;
    inStock: boolean;
}

export type TProduct = {
    name: string;
    description: string;
    price: number;
    category: "electronic"|"beauty"|"food"|"toy"|"book";
    tags: string[];
    variants: TVariants[];
    inventory: TInventory;
}