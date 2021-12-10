import { saleProductSelected } from './../../../interfaces/sales/saleProductSelected.interface';
import { Product } from './../../../interfaces/product/product.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card-product-store',
  templateUrl: './card-product-store.component.html',
  styles: [
  ]
})
export class CardProductStoreComponent implements OnInit {

  constructor(private fb:FormBuilder) { }




  @Input('product') product!:Product;

  @Output('sendProductSelected') sendProductSelected:EventEmitter<Product> = new EventEmitter();

  ngOnInit(): void {
  }

  addCart(product:Product){
    this.sendProductSelected.emit(product);
  }
}
