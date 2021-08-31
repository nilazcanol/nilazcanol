import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts = ()=>{
        return [
            {
              nameProduct: 'Arroz Tucapel',
              descriptionProduct: 'Arroz Gran Selección Grado 2 Tucapel, 1kg',
              priceProduct:1999,
              stockProduct:'13',
              category:'Grocery',
              img:'https://jumbo.vteximg.com.br/arquivos/ids/396670/Leche-entera-1-L.jpg?v=637469297528530000'
            },
            {
              nameProduct: 'Azúcar Iansa',
              descriptionProduct: 'Azúcar Blanca Granulada Iansa, 1kg',
              priceProduct:5999,
              stockProduct:'13',
              category:'Grocery',
              img:'https://jumbo.vteximg.com.br/arquivos/ids/396670/Leche-entera-1-L.jpg?v=637469297528530000'
            }
          ]
  }

}
