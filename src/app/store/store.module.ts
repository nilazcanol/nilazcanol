import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';



import { StoreRoutingModule } from './store-routing.module';
import { MenuStoreComponent } from './components/menus/menu-store/menu-store.component';
import { CardProductComponent } from './components/products/card-product/card-product.component';
import { HomeComponent }        from './pages/home/home.component';
import { CategoryComponent }    from './pages/category/category.component';
import { ProductComponent }     from './pages/product/product.component';


import { ListProductsComponent }    from './components/products/list-products/list-products.component';
import { ListCategoriesComponent }  from './components/categories/list-categories/list-categories.component';
import { NewProductComponent } from './components/products/product-features/product-features.component';
import { PrimengModule } from '../primeNg/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalDeleteProductComponent } from './components/products/modal-delete-product/modal-delete-product.component';
import { SaleComponent } from './pages/sale/sale.component';
import { ProductSaleComponent } from './components/products/product-sale/product-sale.component';
import { MenuSaleComponent } from './components/menus/menu-sale/menu-sale.component';
import { ProductSaleListComponent } from './components/products/product-sale-list/product-sale-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeSaleComponent } from './pages/sale/home-sale/home-sale.component';
@NgModule({
  declarations: [
    MenuStoreComponent,
    CardProductComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    ListProductsComponent,
    ListCategoriesComponent,
    NewProductComponent,
    ModalDeleteProductComponent,
    SaleComponent,
    ProductSaleComponent,
    MenuSaleComponent,
    ProductSaleListComponent,
    ShoppingCartComponent,
    HomeSaleComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreRoutingModule,
    PrimengModule
    ,
  ]
})
export class StoreModule { }
