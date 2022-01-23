import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { resApiLogin } from '../store/interfaces/resApi/resApiLogin.interface';
import { User } from '../store/interfaces/user/user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private _urlBase = environment.URLBASE;
	private _user!: User;
	constructor(private http: HttpClient) {}

	get user() {
		if (localStorage.getItem('user')) {
			return JSON.parse(localStorage.getItem('user')!);
		} else {
			return { ...this._user };
		}
	}

	login(email: string, password: string) {
		const url: string = `${this._urlBase}/auth/login`;
		return this.http.post<resApiLogin>(url, { email, password }).pipe(
			tap((resp) => {
				if (resp.status === true) {
					this._user = {
						email: resp.user.email!,
						name: resp.user.name!,
						rol: resp.user.rol!,
						state: resp.user.state!,
						uid: resp.user.uid!,
					};
				}
			}),
			map((resp) => {
				localStorage.setItem('user', JSON.stringify(resp.user!)),
					localStorage.setItem('token', resp.token!);
				return resp.status;
			}),
			catchError((err) => of(err))
		);
	}

	validateToken(): Observable<boolean> {
		const url: string = `${this._urlBase}/auth/renew`;
		const headers = new HttpHeaders().set(
			'x-token',
			localStorage.getItem('token') || ''
		);
		return this.http.get<resApiLogin>(url, { headers }).pipe(
			map((resp) => {
				return resp.status;
			}),
			catchError((err) => of(false))
		);
	}

	validateTokenByRole(rol: string): boolean {
		const user = JSON.parse(localStorage.getItem('user')!);
		if (user.rol == rol) {
			return true;
		} else {
			return false;
		}
	}

	logout() {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
	}
}
