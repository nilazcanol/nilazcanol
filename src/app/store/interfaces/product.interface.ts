export interface Product{
    _id?:number,
    name: string,
    description: string,
    price: number,
    stock: string,
    category:string,
    img?:string,
    state?:Boolean
}