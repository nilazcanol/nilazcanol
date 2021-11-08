import { ResApiUserResponse } from './../interfaces/resApi/resApiUserResponse';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user/user.interface';

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
    
	saveProduct(user:User) {
        const url: string = `${this._urlBase}/users`;
        const headers = new HttpHeaders().set(
            'x-token',
            localStorage.getItem('token') || ''
        );
        return this.http.post<ResApiUserResponse>(url,user, { headers });
	}
}
