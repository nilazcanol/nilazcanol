import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersModule } from './../users/users.module';
import { MenuSaleComponent } from './menu-sale/menu-sale.component';
import { MenuStoreComponent } from './menu-store/menu-store.component';

@NgModule({
  declarations: [
    MenuStoreComponent,
    MenuSaleComponent,
  ],
  imports: [
    CommonModule, RouterModule,UsersModule  ],
  exports:[
    MenuStoreComponent,
    MenuSaleComponent,
  ]
})
export class MenusModule { }
