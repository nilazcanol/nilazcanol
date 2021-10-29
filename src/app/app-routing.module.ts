import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path:'store', loadChildren: () => import('./store/store.module').then( m => m.StoreModule )},
    { path:'access', loadChildren: () => import('./login/login.module').then( m => m.LoginModule )},
    { path: '**', redirectTo:'access'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
