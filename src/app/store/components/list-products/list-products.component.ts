import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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


  isNewProduct:boolean = true;
  productInput? :Product;

  @Input('listProduct') mostSelledProducts!: Product[];


  selectProduct(isNew:boolean = true,productSelect?: Product):void {
    if(isNew){
        this.isNewProduct = isNew;             
    } else {
        this.isNewProduct = isNew; 
        this.productInput = productSelect!;       

    }
  }
  
}
