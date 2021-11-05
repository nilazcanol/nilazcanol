import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class IsAdminGuard implements CanActivate, CanLoad {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(): Observable<boolean> | boolean {
        window.alert('You do not have administrator permission')
		return this.authService.validateTokenByRole('ADMIN_ROLE');
	}
	canLoad(): Observable<boolean> | boolean {
		return this.authService.validateTokenByRole('ADMIN_ROLE');
	}
}
