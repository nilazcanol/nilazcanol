// Angular
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// Components
import { IsAdminGuard } from './../../../login/guards/is-admin.guard';
import { ListUserComponent } from './list-user/list-user.component';
import { HomeUsersComponent } from './home-users/home-users.component';

export const routes: Routes = [
	{
		path: 'users',
		component: HomeUsersComponent,
		children: [{ path: 'listUser', component: ListUserComponent }],
		canLoad: [IsAdminGuard],
		canActivate: [IsAdminGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class usersRoutingModule {}
