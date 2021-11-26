import { Product } from 'src/app/store/interfaces/product/product.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('listShoppingCart') listShoppingCart: Product[] = [];

  change:number=0;

  onKey(event:any) {
    const { value } = event.target

      this.change = value;

  }
}
