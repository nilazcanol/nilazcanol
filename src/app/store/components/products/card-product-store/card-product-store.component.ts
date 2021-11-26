import { Product } from './../../../interfaces/product/product.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product-store',
  templateUrl: './card-product-store.component.html',
  styles: [
  ]
})
export class CardProductStoreComponent implements OnInit {

  constructor() { }

  @Input('product') product!:Product;

  ngOnInit(): void {
  }

}
