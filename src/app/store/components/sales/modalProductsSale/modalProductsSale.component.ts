import { Component, OnInit, Input } from '@angular/core';
import {  Product } from './../../../interfaces/sales/saleResponseGet.inteface';

@Component({
  selector: 'app-modalProductsSale',
  templateUrl: './modalProductsSale.component.html',
  styleUrls: ['./modalProductsSale.component.css']
})
export class ModalProductsSaleComponent implements OnInit {

  constructor() { }


  @Input('products') products: Product[] = [];

  ngOnInit() {
  }

}
