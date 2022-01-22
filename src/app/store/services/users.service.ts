import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resApiUserAddResponse } from '../interfaces/resApi/resApiUserAddResponse';
import { User } from '../interfaces/user/user.interface';
import { environment } from './../../../environments/environment';
import { ResApiUserResponse } from './../interfaces/resApi/resApiUserResponse';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	private _urlBase = environment.URLBASE;

	constructor(private http: HttpClient) {}

	getAllUser() {
		const url: string = `${this._urlBase}/users`;		
		return this.http.get<ResApiUserResponse>(url);
	}
    
	saveUser(user:User) {
        const url: string = `${this._urlBase}/users`;       
        return this.http.post<resApiUserAddResponse>(url, user);
	}
	updateUser(user:User) {
        const url: string = `${this._urlBase}/users/${user.uid}`;       
        return this.http.put<resApiUserAddResponse>(url, user);
	}

	deleteUser(user:User) {
        const url: string = `${this._urlBase}/users/${user.uid}`;     
        return this.http.delete<resApiUserAddResponse>(url);
	}
}
