import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path:'store', loadChildren: ()=> import('./store/store.module').then( m => m.StoreModule )},
    { path: '**', redirectTo:'store'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
