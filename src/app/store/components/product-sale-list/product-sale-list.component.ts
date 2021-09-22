import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-sale-list',
  templateUrl: './product-sale-list.component.html',
  styles: [
  ]
})


export class ProductSaleListComponent implements OnInit {
    
 @Input('listProduct') mostSelledProducts!: Product[];
 
 constructor() { }

  ngOnInit(): void {
  }

}
