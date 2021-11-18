import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';

@Injectable({
	providedIn: 'root',
})
export class IsAdminGuard implements CanActivate, CanLoad {
	constructor(
        private authService: AuthService, 
        private router: Router
        ) {}

	canActivate(): Observable<boolean> | boolean {
		const resIsRole = this.authService.validateTokenByRole('ADMIN_ROLE');
		if (!resIsRole) {
            swal.fire('You do not have administrator permission', '', 'error');
		}

		return this.authService.validateTokenByRole('ADMIN_ROLE');
	}
	canLoad(): Observable<boolean> | boolean {
		return this.authService.validateTokenByRole('ADMIN_ROLE');
	}
}
