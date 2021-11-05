import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './pages/sale/shopping-cart/shopping-cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeSaleComponent } from "./pages/sale/home-sale/home-sale.component";
import { HistoryComponent } from './pages/sale/history/history.component';
import { NewComponent } from './pages/sale/new/new.component';
import { HomeUsersComponent } from './pages/user/home-users/home-users.component';
const routes: Routes = [
    {
        path:'',
        children:[
            { path:'home', component:HomeComponent },
            { path:'products', component:ProductComponent },
            { path:'categories', component:CategoryComponent },
            { 
                path:'sales', 
                component:HomeSaleComponent,
                children:[
                    { path:'new', component: NewComponent },
                    { path:'history', component: HistoryComponent },
                    { path:'shopping-cart', component: ShoppingCartComponent },
                    { path:'**', redirectTo:'history'},
                    
                ]
            },
            { path:'users', component:HomeUsersComponent },
            { path:'**', redirectTo:'home' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
