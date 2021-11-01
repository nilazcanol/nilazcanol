import { Product } from "../product.interface";

export interface sale{
    _id?: string,
    __v?: number,
    total:number,
    date: string,
    products: [
        {
            product: Product,
            amount: number
        }
    ],
}