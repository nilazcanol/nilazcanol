import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateTokenGuard } from './login/guards/validate-token.guard';

const routes: Routes = [
    { path:'store', loadChildren: () => import('./store/store.module').then( m => m.StoreModule ),
      canActivate:[
          ValidateTokenGuard
      ],
      canLoad:[
          ValidateTokenGuard
      ]
    },
    { path:'access', loadChildren: () => import('./login/login.module').then( m => m.LoginModule )},
    { path: '**', redirectTo:'access'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
