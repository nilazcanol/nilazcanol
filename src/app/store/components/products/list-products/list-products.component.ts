import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/store/services/products.service';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styles: [ ]
})
export class ListProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe( (res)=> {
        this.mostSelledProducts = res.products;
    },(res)=>{
        this.mostSelledProducts = [
            {
                category:'test',
                description:'test',
                name:'test',
                price:0,
                stock:0
            }
        ];

    })
  }


  isNewProduct:boolean = true;
  productInput? :Product;


  mostSelledProducts!: Product[]

  selectProduct(isNew:boolean = true,productSelect?: Product):void {
    if(isNew){
        this.isNewProduct = isNew;             
    } else {
        this.isNewProduct = isNew; 
        this.productInput = productSelect!;       

    }
  }

  addToTheList(product:Product){

      this.mostSelledProducts.push(product)
  }
  
}
