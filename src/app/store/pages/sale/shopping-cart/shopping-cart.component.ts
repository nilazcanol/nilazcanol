import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: [
  ]
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  isFinished: boolean = false;

  ngOnInit(): void {
  }

  finishPurchase(state:boolean){
    this.isFinished = state;
  }

}
