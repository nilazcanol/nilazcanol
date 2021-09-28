import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';



import { StoreRoutingModule } from './store-routing.module';
import { MenuStoreComponent } from './components/menu-store/menu-store.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { HomeComponent }        from './pages/home/home.component';
import { CategoryComponent }    from './pages/category/category.component';
import { ProductComponent }     from './pages/product/product.component';


import { ListProductsComponent }    from './components/list-products/list-products.component';
import { ListCategoriesComponent }  from './components/list-categories/list-categories.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { PrimengModule } from '../primeNg/primeng.module';
import { ModalAddProductComponent } from './components/modal-add-product/modal-add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalEditProductComponent } from './components/modal-edit-product/modal-edit-product.component';
import { ModalDeleteProductComponent } from './components/modal-delete-product/modal-delete-product.component';
import { SaleComponent } from './pages/sale/sale.component';
import { ProductSaleComponent } from './components/product-sale/product-sale.component';
import { MenuSaleComponent } from './components/menu-sale/menu-sale.component';
import { ProductSaleListComponent } from './components/product-sale-list/product-sale-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeSaleComponent } from './pages/sale/home-sale/home-sale.component';
import { MiniShoppingCartComponent } from './components/mini-shopping-cart/mini-shopping-cart.component';
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
    ModalAddProductComponent,
    ModalEditProductComponent,
    ModalDeleteProductComponent,
    SaleComponent,
    ProductSaleComponent,
    MenuSaleComponent,
    ProductSaleListComponent,
    ShoppingCartComponent,
    HomeSaleComponent,
    MiniShoppingCartComponent
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
