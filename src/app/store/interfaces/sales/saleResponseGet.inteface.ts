export interface ResGetallSale {
    arraySales: ArraySale[];
}

export interface ArraySale {
    _id:      string;
    total:    number;
    date:     Date;
    products: Product[];
}

export interface Product {
    img:         string;
    state:       null;
    _id:         string;
    name:        string;
    description: string;
    price:       number;
    stock:       number;
    category:    string;
    __v:         number;
}
