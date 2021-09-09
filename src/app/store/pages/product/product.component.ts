import { Component, OnInit } from '@angular/core'
import { Product } from '../../interfaces/product.interface'
import { resApiProduct } from '../../interfaces/resApiProduct.interface';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [],
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  isList!: boolean
  isNew!: boolean;
  mostSelledProducts!: Product[]
  productSelected: Product ={
    category: '',
    name: '',
    description: '',
    price:0,
    stock:'',
    img:''
  };



  ngOnInit(): void {
    this.isList = true
    this.isNew = true
    this.mostSelledProducts = this.productService.getProducts();
    this.productService.getAllProducts().subscribe( (res)=> {
        this.mostSelledProducts = res.products;
    })
  }

  changeView(isList: boolean) {
    this.isList = !isList;
  }

  display: boolean = false

  showDialog() {
    this.display = true
  }

  showProduct(product:Product):void{
    this.productSelected = product;
  }

  selectProductCard(product:Product):void{
    this.productSelected = product;
  }
}

