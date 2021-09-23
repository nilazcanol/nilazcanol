import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-sale-list',
  templateUrl: './product-sale-list.component.html',
  styles: [
  ]
})


export class ProductSaleListComponent implements OnInit {
    
 @Input('listProduct') mostSelledProducts!: Product[];
 
 formProductSelect: FormGroup = this.fb.group({
    selectAccount: [0, [Validators.required ] ],
   
  })
 constructor( private fb:FormBuilder ) { }

 val: number=10;

  ngOnInit(): void {
  }

}
