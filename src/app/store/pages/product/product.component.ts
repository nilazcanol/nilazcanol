import { Component, OnInit } from '@angular/core'
import { ProductSmall } from '../../interfaces/product-small.interface'
import { Product } from '../../interfaces/product.interface'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [],
})
export class ProductComponent implements OnInit {
  constructor(private productServices: ProductsService) {}

  isList!: boolean
  isNew!: boolean
  mostSelledProducts!: Product[]
  productSelected: Product ={
    categoryProduct: '',
    nameProduct: '',
    descriptionProduct: '',
    priceProduct:0,
    stockProduct:'',
    imgProduct:''
  };

  productSelectedSmall: ProductSmall ={
    categoryProduct: '',
    nameProduct: '',
    descriptionProduct: '',
  };

  ngOnInit(): void {
    this.isList = true
    this.isNew = true
    this.mostSelledProducts = this.productServices.getProducts()
  }

  changeView(isList: boolean) {
    this.isList = !isList
  }

  display: boolean = false

  showDialog() {
    this.display = true
  }

  showProduct(product:Product){

    this.productSelected = product;

    this.productSelectedSmall = {
        nameProduct:product.nameProduct,
        descriptionProduct:product.descriptionProduct,
        categoryProduct:product.categoryProduct
    }
  }

}
