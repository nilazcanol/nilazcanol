import { HistoryComponent } from './history/history.component';
import { NewComponent } from './new/new.component';
// Angular
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { HomeSaleComponent } from './home-sale.component';
import { ShoppingCartComponent } from '../../components/sales/shopping-cart/shopping-cart.component';
// Components

export const routes: Routes = [
    {
        path: 'sales',
        component: HomeSaleComponent,
        children: [
            { path: 'new', component: NewComponent },
            { path: 'history', component: HistoryComponent },
            { path: 'shoppingCart', component: ShoppingCartComponent },
            { path: '**', redirectTo: 'history'},

        ]
    },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class salesRoutingModule {}
