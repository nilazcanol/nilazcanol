import { Product } from './../../../interfaces/product/product.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-product-store',
  templateUrl: './card-product-store.component.html',
  styles: [
  ]
})
export class CardProductStoreComponent implements OnInit {

  constructor() { }

  @Input('product') product!:Product;

  @Output('sendProductSelected') sendProductSelected:EventEmitter<Product> = new EventEmitter();

  ngOnInit(): void {
  }

  addCart(product:Product){
    this.sendProductSelected.emit(product);
  }
}
