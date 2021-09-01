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
    ModalAddProductComponent
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
