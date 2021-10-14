import { Component, OnInit } from '@angular/core'
import { Product } from '../../interfaces/product.interface'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [],
})
export class ProductComponent implements OnInit {
  constructor() {}

  isList!: boolean
  isNew!: boolean;
  productSelected: Product ={
    category: '',
    name: '',
    description: '',
    price:0,
    stock:0,
    img:''
  };



  ngOnInit(): void {
    this.isList = true
    this.isNew = true
   
  }




  showProduct(product:Product):void{
    this.productSelected = product;
  }

 
}

