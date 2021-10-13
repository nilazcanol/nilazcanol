import { Product } from "./product.interface";

export interface Sale{
    total: string,
    listProduct: Product[],
    date:Date
}