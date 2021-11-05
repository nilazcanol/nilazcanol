import { ResApiUserResponse } from './../interfaces/resApi/resApiUserResponse';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	private _urlBase = environment.URLBASE;

  constructor(private http:HttpClient) { }

  getAllUser(){
    const url: string = `${this._urlBase}/users`;
		return this.http.get<ResApiUserResponse>(url);  }

}
