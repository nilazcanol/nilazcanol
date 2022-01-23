import { ReactiveFormsModule } from '@angular/forms';
import { ModalDeleteCategoryComponent } from './modal-delete-category/modal-delete-category.component';
import { CategoryFeaturesComponent } from './category-features/category-features.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ListCategoriesComponent,
    CategoryFeaturesComponent,
    ModalDeleteCategoryComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ListCategoriesComponent,
    CategoryFeaturesComponent,
    ModalDeleteCategoryComponent,

  ]
})
export class CategoriesModule { }
