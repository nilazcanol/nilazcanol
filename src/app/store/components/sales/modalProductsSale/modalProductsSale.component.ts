import { Component, OnInit, Input } from '@angular/core';
import {  Product } from './../../../interfaces/sales/saleResponseGet.inteface';

@Component({
  selector: 'app-modal-products-sale',
  templateUrl: './modalProductsSale.component.html',
  styleUrls: ['./modalProductsSale.component.css']
})
export class ModalProductsSaleComponent  {

  constructor() { }


  @Input() products: Product[] = [];

}
