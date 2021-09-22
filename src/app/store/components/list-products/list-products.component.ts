import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styles: [ ]
})
export class ListProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Output() productCheckedSend: EventEmitter<Product> = new EventEmitter<Product>();

  


  @Input('listProduct') mostSelledProducts!: Product[];


  selectProduct(productSelect: Product):void {
    this.productCheckedSend.emit( productSelect)
  }
}
