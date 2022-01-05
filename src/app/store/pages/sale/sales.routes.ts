import { HistoryComponent } from './history/history.component';
import { NewComponent } from './new/new.component';
// Angular
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { HomeSaleComponent } from './home-sale.component';
// Components

export const routes: Routes = [
    {
        path:'sales',
        component:HomeSaleComponent,
        children:[
            { path:'new', component: NewComponent },
            { path:'history', component: HistoryComponent },
            { path:'**', redirectTo:'history'},

        ]
    },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class salesRoutingModule {}
