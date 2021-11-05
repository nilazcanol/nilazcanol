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
import { NewProductComponent } from './components/products/product-add-and-update/product-add-and-update.component';
import { PrimengModule } from '../primeNg/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalDeleteProductComponent } from './components/products/modal-delete-product/modal-delete-product.component';
import { ProductSaleComponent } from './components/products/product-sale/product-sale.component';
import { MenuSaleComponent } from './components/menus/menu-sale/menu-sale.component';
import { ProductSaleListComponent } from './components/products/product-sale-list/product-sale-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeSaleComponent } from './pages/sale/home-sale/home-sale.component';
import { ProductFunctionsListComponent } from './components/products/product-functions-list/product-functions-list.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { CategoryPipe } from './pipes/category.pipe';
import { SearchComponent } from './components/products/product-search/product-search.component';
import { CategoryFeaturesComponent } from './components/categories/category-features/category-features.component';
import { ModalDeleteCategoryComponent } from './components/categories/modal-delete-category/modal-delete-category.component';
import { HistoryComponent } from './pages/sale/history/history.component';
import { NewComponent } from './pages/sale/new/new.component';
import { ListSalesComponent } from './components/sales/list-sales/list-sales.component';
import { SalesSearchComponent } from './components/sales/sales-search/sales-search.component';
import { RolPipe } from './pipes/rol.pipe';
import { HomeUsersComponent } from './pages/user/home-users/home-users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ListUserComponent } from './pages/user/list-user/list-user.component';
import { UserFunctionsListComponent } from './components/users/user-functions-list/user-functions-list.component';
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
    ProductSaleComponent,
    MenuSaleComponent,
    ProductSaleListComponent,
    ShoppingCartComponent,
    HomeSaleComponent,
    ProductFunctionsListComponent,
    ProductDetailComponent,
    CategoryPipe,
    RolPipe,
    SearchComponent,
    CategoryFeaturesComponent,
    ModalDeleteCategoryComponent,
    HistoryComponent,
    NewComponent,
    ListSalesComponent,
    SalesSearchComponent,
    HomeUsersComponent,
    UsersListComponent,
    ListUserComponent,
    UserFunctionsListComponent
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
