import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/store/interfaces/user/user.interface';

@Component({
	selector: 'app-menu-store',
	templateUrl: './menu-store.component.html',
	styles: [
		`
			.border-radius {
				border-radius: 10px;
			}
		`,
	],
})
export class MenuStoreComponent implements OnInit {
	constructor(private authService: AuthService, private router: Router) {
		this.items = [
			{
				label: 'Home',
				icon: 'pi pi-fw pi-home',
				routerLink: '/store/home',
				routerLinkActiveOptions: 'active',
			},
			{
				label: 'Products',
				icon: 'pi pi-fw pi-book',
				routerLink: '/store/products',
				routerLinkActiveOptions: 'active',
			},
			{
				label: 'Categories',
				icon: 'pi pi-fw pi-list',
				routerLink: '/store/categories',
				routerLinkActiveOptions: 'active',
			},
			{
				label: 'Sales',
				icon: 'pi pi-fw pi-shopping-cart',
				routerLink: '/store/sales/history',
				routerLinkActiveOptions: 'active',
			},
			{
				label: 'User',
				icon: 'pi pi-fw pi-users',
				routerLink: '/store/users/listUser',
				routerLinkActiveOptions: 'active',
			},
			{
				label: 'Statistics',
				icon: 'pi pi-fw pi-chart-bar',
				routerLink: '/store/statistics',
				routerLinkActiveOptions: 'active',
			},
		];
	}

	get user() {
		return this.authService.user;
	}

	items!: MenuItem[];

	ngOnInit() {}

	logout() {
		this.authService.logout();
		this.router.navigateByUrl('/auth');
	}
}
