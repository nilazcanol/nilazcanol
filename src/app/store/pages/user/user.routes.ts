import { IsAdminGuard } from './../../../login/guards/is-admin.guard';
import { ListUserComponent } from './list-user/list-user.component';
import { HomeUsersComponent } from './home-users/home-users.component';

// Angular
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
// Components

export const routes: Routes = [
    {
        path: 'users',
        component: HomeUsersComponent,
        children: [{ path: 'listUser', component: ListUserComponent }],
        canLoad: [IsAdminGuard],
        canActivate: [IsAdminGuard],
    },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class usersRoutingModule {}
