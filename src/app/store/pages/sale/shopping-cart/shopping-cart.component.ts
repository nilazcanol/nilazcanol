import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: [
  ]
})
export class ShoppingCartComponent {

  constructor() { }

  isFinished: boolean = false;



  finishPurchase(state:boolean){
    this.isFinished = state;
  }

}
