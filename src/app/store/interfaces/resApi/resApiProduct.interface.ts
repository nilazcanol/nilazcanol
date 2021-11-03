import { Product } from "../product/product.interface";

export interface resApiProduct{
    products: Product[] ,
    total?:string
}