import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { MenuStoreComponent } from './conponents/menu-store/menu-store.component';


@NgModule({
  declarations: [
    MenuStoreComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
