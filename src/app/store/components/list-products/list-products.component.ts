import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
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

  @Input('listProduct') mostSelledProducts!: Product[];


}
