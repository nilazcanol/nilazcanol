import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// PrimeNG
import { PrimengModule } from '../primeNg/primeng.module';
// Pipes
import { CategoryPipe } from './pipes/category.pipe';
// Router
import { StoreRoutingModule } from './store-routing.module';
// Modules
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
      CategoryPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreRoutingModule,
    PrimengModule,
    ComponentsModule, 
    PagesModule
  ], 
  
})
export class StoreModule { }
