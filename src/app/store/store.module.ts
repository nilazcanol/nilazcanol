import { CommonModule } from '@angular/common';
// * Angular
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// * PrimeNG
import { PrimengModule } from '../primeNg/primeng.module';
import { ComponentsModule } from './components/components.module';
// * Category components
import { CategoryComponent } from './pages/category/category.component';
// * Home component
import { HomeComponent } from './pages/home/home.component';
// * Product components
import { ProductComponent } from './pages/product/product.component';
import { HistoryComponent } from './pages/sale/history/history.component';
import { HomeSaleComponent } from './pages/sale/home-sale/home-sale.component';
// * Sales components
import { NewComponent } from './pages/sale/new/new.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
// * User components
import { HomeUsersComponent } from './pages/user/home-users/home-users.component';
import { ListUserComponent } from './pages/user/list-user/list-user.component';
// * Category pipe
import { CategoryPipe } from './pipes/category.pipe';
import { StoreRoutingModule } from './store-routing.module';






@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    HomeSaleComponent,
    CategoryPipe,
    HistoryComponent,
    NewComponent,
    HomeUsersComponent,
    ListUserComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreRoutingModule,
    PrimengModule,
    ComponentsModule
  ]
})
export class StoreModule { }
