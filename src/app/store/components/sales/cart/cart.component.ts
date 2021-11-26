import { Component, OnInit } from '@angular/core';

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

  change:number=0;

  onKey(event:any) {
    const { value } = event.target

      this.change = value;

  }
}
