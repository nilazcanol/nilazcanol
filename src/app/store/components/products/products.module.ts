import { PrimengModule } from './../../../primeNg/primeng.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchComponent } from './product-search/product-search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { ModalDeleteProductComponent } from './modal-delete-product/modal-delete-product.component';
import { NewProductComponent } from './product-add-and-update/product-add-and-update.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CardProductComponent } from './card-product/card-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesModule } from '../sales/sales.module';
import { CardProductStoreComponent } from './table-product-store/table-product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardProductComponent,
    ListProductsComponent,
    NewProductComponent,
    ModalDeleteProductComponent,
    ProductSaleComponent,
    ProductDetailComponent,
    SearchComponent,  
    CardProductStoreComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    FormsModule,
    SalesModule,
    RouterModule
  ],
  exports: [
    CardProductComponent,
    ListProductsComponent,
    NewProductComponent,
    ModalDeleteProductComponent,
    ProductSaleComponent,
    ProductDetailComponent,
    SearchComponent,    
    CardProductStoreComponent

  ]
})
export class ProductsModule { }
