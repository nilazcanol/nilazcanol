import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/store/interfaces/product/product.interface';
import { ProductsService } from 'src/app/store/services/products.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styles: [
  ]
})
export class NewComponent implements OnInit {

  constructor(
      private productService:ProductsService
  ) { }

    listProduct:Product[] = []



  ngOnInit(): void {


    this.productService.getAllProducts().subscribe( res => {
        this.listProduct = res.products;
    });



  }



}
