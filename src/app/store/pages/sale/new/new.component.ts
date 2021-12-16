import { saleProductSelected } from './../../../interfaces/sales/saleProductSelected.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/store/interfaces/product/product.interface';
import { ProductsService } from 'src/app/store/services/products.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styles: [
    `
     .btn-dark:hover, .btn-dark:active, .btn-dark:visited {
      background-color: #FFC008;
      border:#FFC008;
      color:#212529;
      -webkit-transition: background-color 0.5s ease-out;
      -moz-transition: background-color 0.5s ease-out;
      -o-transition: background-color 0.5s ease-out;
      transition: background-color 0.5s ease-out;
}

    `
  ]
})
export class NewComponent implements OnInit {

  constructor(
      private productService:ProductsService
  ) { }

    listProduct:Product[] = []


  shoppingCart: Product[]= [];


  ngOnInit(): void {


    this.productService.getAllProducts().subscribe( res => {
        this.listProduct = res.products;
    });




  }
  addShoppingCart(saleProductSelected:saleProductSelected){
    this.shoppingCart.push(saleProductSelected.product);
  }



}
