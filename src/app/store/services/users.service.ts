import { ResApiUserResponse } from './../interfaces/resApi/resApiUserResponse';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user/user.interface';
import { resApiUserAddResponse } from '../interfaces/resApi/resApiUserAddResponse';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	private _urlBase = environment.URLBASE;

	constructor(private http: HttpClient) {}

	getAllUser() {
		const url: string = `${this._urlBase}/users`;
		const headers = new HttpHeaders().set(
			'x-token',
			localStorage.getItem('token') || ''
		);
		return this.http.get<ResApiUserResponse>(url, { headers });
	}
    
	saveUser(user:User) {
        const url: string = `${this._urlBase}/users`;
        const headers = new HttpHeaders().set(
            'x-token',
            localStorage.getItem('token') || ''
        );
        return this.http.post<resApiUserAddResponse>(url,user, { headers });
	}
	updateUser(user:User) {
        const url: string = `${this._urlBase}/users/${user.uid}`;
        const headers = new HttpHeaders().set(
            'x-token',
            localStorage.getItem('token') || ''
        );
        return this.http.put<resApiUserAddResponse>(url,user, { headers });
	}

	deleteUser(user:User) {
        const url: string = `${this._urlBase}/users/${user.uid}`;
        const headers = new HttpHeaders().set(
            'x-token',
            localStorage.getItem('token') || ''
        );
        return this.http.delete<resApiUserAddResponse>(url, { headers });
	}
}
