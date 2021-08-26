import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from 'primeng/menu';
import { StoreRoutingModule } from './store-routing.module';
import { MenuStoreComponent } from './components/menu-store/menu-store.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {OrderListModule} from 'primeng/orderlist';
import { ListProductsComponent } from './components/list-products/list-products.component';
@NgModule({
  declarations: [
    MenuStoreComponent,
    CardProductComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    ListProductsComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MenuModule,
    CardModule,
    ButtonModule,
    OrderListModule,
  ]
})
export class StoreModule { }
