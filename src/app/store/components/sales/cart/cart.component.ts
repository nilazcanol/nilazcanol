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


  get totalPrice(){
    const total = this.listShoppingCart.map(product => product.price);


    return 12
  }

  change:number=0;

  onKey(event:any) {
    const { value } = event.target

      this.change = value;

  }
}
