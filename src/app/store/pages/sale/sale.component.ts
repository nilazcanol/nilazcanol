import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styles: [
  ]
})
export class SaleComponent implements OnInit {

  constructor( private productService: ProductsService) { }

  

  arrayProduct!: Product[];

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(res =>{
        this.arrayProduct = res.products;
    });

  }

  

}
