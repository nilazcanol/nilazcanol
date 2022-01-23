import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product/product.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styles: []
})
export class CardProductComponent  {

  constructor() { }


  @Input() nameProduct: string = "name";
  @Input() descriptionProduct: string = "description";
  @Input() priceProduct: number = 0;
  @Input() stockProduct: number = 0 ;
  @Input() imgProduct: string = '' ;
  @Input() categoryProduct: string = ' ' ;
  @Input() products: Product[] = [];


}
