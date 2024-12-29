import { createContext, useContext } from "react";

export interface IProductCard {
    id: number,
    title: string,
    image: string,
    price: string,
}

export const ProductCardContext = createContext<IProductCard | undefined>(undefined)

export const useProductCardContext = () => {
    const context = useContext(ProductCardContext);

    if (!context) {
        throw new Error("useProductCardContext must be call within Product Card Context")
    }

    return context
}