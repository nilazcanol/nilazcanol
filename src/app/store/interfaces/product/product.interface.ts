export interface Product{
    _id?:number,
    name: string,
    description: string,
    price: number,
    stock: number,
    category:string,
    img?:string,
    state?:Boolean
    file?:File
}