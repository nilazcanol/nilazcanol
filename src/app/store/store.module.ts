import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
