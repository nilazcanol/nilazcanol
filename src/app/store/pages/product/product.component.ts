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
      nameProduct: 'Product 1',
      descriptionProduct: 'Product ',
      priceProduct:1999,
      stockProduct:'13'
    },
    {
      nameProduct: 'Product 2',
      descriptionProduct: 'Product ',
      priceProduct:5999,
      stockProduct:'13'
    },
    {
      nameProduct: 'Product 3',
      descriptionProduct: 'Product ',
      priceProduct:8999,
      stockProduct:'13'
    },
  ]
  ngOnInit(): void {
  }

}
