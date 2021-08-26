import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styles: [
  ]
})
export class CardProductComponent implements OnInit {

  constructor() { }


  @Input('nameProduct') nameProduct: string = "name";
  @Input('descriptionProduct') descriptionProduct: string = "description";
  @Input('priceProduct') priceProduct: number = 12;
  @Input('stockProduct') stockProduct: string = '12' ;

  ngOnInit(): void {
  }

}
