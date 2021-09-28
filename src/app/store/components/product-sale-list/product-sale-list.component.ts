import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-sale-list',
  templateUrl: './product-sale-list.component.html',
  styles: [
  ],
  providers:[MessageService]
})


export class ProductSaleListComponent implements OnInit {
    
 @Input('listProduct') mostSelledProducts!: Product[];
 
 formProductSelect: FormGroup = this.fb.group({
    selectAccount: [0, [Validators.required ] ],
   
  })
 constructor( private fb:FormBuilder, private messageService: MessageService ) { }

 val: number=10;

  listProductSelection: Product[] | undefined =[

  ] ;
  ngOnInit(): void {
  }

  addProduct(productSelected:Product){

    this.listProductSelection!.push(productSelected);
    this.messageService.add({severity:'success', summary: productSelected.name+' Price: '+ productSelected.price, detail: productSelected.description });

  }

  getList(){
      console.log(this.listProductSelection);
  }

}
