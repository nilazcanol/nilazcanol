import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styles: [
  ]
})
export class CardProductComponent implements OnInit {

  constructor() { }


  @Input('nameProduct') nameProduct: string = "name";
  @Input('descriptionProduct') descriptionProduct: string = "description";
  @Input('priceProduct') priceProduct: number = 0;
  @Input('stockProduct') stockProduct: string = '0' ;
  @Input('categoryProduct') categoryProduct: string = ' ' ;

  @Input('products') products: Product[] = [];

  ngOnInit(): void {
  }

}
