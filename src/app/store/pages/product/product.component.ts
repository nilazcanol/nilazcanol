import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit {

  constructor() { }
  
  mostSelledProducts: Product[] = [
    {
      nameProduct: 'Flour',
      descriptionProduct: 'lorem9',
      priceProduct:1999,
      stockProduct:'13',
      category:'Grocery',
      img:'https://jumbo.vteximg.com.br/arquivos/ids/396670/Leche-entera-1-L.jpg?v=637469297528530000'
    },
    {
      nameProduct: 'Product 2',
      descriptionProduct: 'Product ',
      priceProduct:5999,
      stockProduct:'13',
      category:'Grocery',
      img:'https://jumbo.vteximg.com.br/arquivos/ids/396670/Leche-entera-1-L.jpg?v=637469297528530000'
    },
    {
      nameProduct: 'Product 3',
      descriptionProduct: 'Product ',
      priceProduct:8999,
      stockProduct:'13',
      category:'Grocery',
      img:'https://jumbo.vteximg.com.br/arquivos/ids/396670/Leche-entera-1-L.jpg?v=637469297528530000'
    },
  ]
  ngOnInit(): void {
  }

}
