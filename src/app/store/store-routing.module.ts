import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { SaleComponent } from './pages/sale/sale.component';

const routes: Routes = [
    {
        path:'',
        children:[
            { path:'home', component:HomeComponent },
            { path:'products', component:ProductComponent },
            { path:'categories', component:CategoryComponent },
            { path:'sales', component:SaleComponent },
            { path:'**', redirectTo:'home' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
