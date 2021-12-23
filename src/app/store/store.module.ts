import { ModalProductsSaleComponent } from './components/sales/modalProductsSale/modalProductsSale.component';
// * Angular
import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// * PrimeNG
import { PrimengModule } from '../primeNg/primeng.module';

// * Product components
import { CardProductComponent }     from './components/products/card-product/card-product.component';
import { ProductComponent }         from './pages/product/product.component';
import { ListProductsComponent }    from './components/products/list-products/list-products.component';
import { NewProductComponent }      from './components/products/product-add-and-update/product-add-and-update.component';
import { ProductSaleComponent }     from './components/products/product-sale/product-sale.component';
import { ProductDetailComponent }   from './components/products/product-detail/product-detail.component';
import { SearchComponent }          from './components/products/product-search/product-search.component';
import { InfoProductComponent }     from './components/sales/info-product/info-product.component';
import { ModalDeleteProductComponent }   from './components/products/modal-delete-product/modal-delete-product.component';
import { ProductFunctionsListComponent } from './components/products/product-functions-list/product-functions-list.component';
import { CardProductStoreComponent }     from './components/products/card-product-store/card-product-store.component';

// * Home component
import { HomeComponent }        from './pages/home/home.component';

// * Category components
import { CategoryComponent }        from './pages/category/category.component';
import { ListCategoriesComponent }  from './components/categories/list-categories/list-categories.component';
import { CategoryFeaturesComponent }    from './components/categories/category-features/category-features.component';
import { ModalDeleteCategoryComponent } from './components/categories/modal-delete-category/modal-delete-category.component';

// * Category pipe
import { CategoryPipe } from './pipes/category.pipe';

// * Sales components
import { ListSalesComponent }   from './components/sales/list-sales/list-sales.component';
import { CartComponent }        from './components/sales/cart/cart.component';
import { NewComponent }         from './pages/sale/new/new.component';
import { HistoryComponent }     from './pages/sale/history/history.component';
import { HomeSaleComponent }    from './pages/sale/home-sale/home-sale.component';

// * Menu and navBar components
import { MenuStoreComponent }   from './components/menus/menu-store/menu-store.component';
import { MenuSaleComponent }    from './components/menus/menu-sale/menu-sale.component';

// * User components
import { HomeUsersComponent }   from './pages/user/home-users/home-users.component';
import { UsersListComponent }   from './components/users/users-list/users-list.component';
import { ListUserComponent }    from './pages/user/list-user/list-user.component';
import { UserAddAndUpdateComponent }    from './components/users/user-add-and-update/user-add-and-update.component';
import { ModalDeleteUserComponent }     from './components/users/modal-delete-user/modal-delete-user.component';
import { UserFunctionsListComponent }   from './components/users/user-functions-list/user-functions-list.component';

// * User pipe
import { RolPipe } from './pipes/rol.pipe';


import { StoreRoutingModule } from './store-routing.module';
import { StatisticsComponent } from './pages/statistics/statistics.component';


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
    HomeUsersComponent,
    UsersListComponent,
    ListUserComponent,
    UserFunctionsListComponent,
    UserAddAndUpdateComponent,
    ModalDeleteUserComponent,
    CardProductStoreComponent,
    CartComponent,
    InfoProductComponent,
    ModalProductsSaleComponent,
    StatisticsComponent
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
