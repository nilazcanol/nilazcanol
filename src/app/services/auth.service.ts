import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { resApiLogin } from '../store/interfaces/resApi/resApiLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _urlBase = environment.URLBASE;

  constructor(private http: HttpClient) { }


  login(email:string, password:string):Observable<resApiLogin>{
      const url: string = `${this._urlBase}/auth/login`;
      return this.http.post<resApiLogin>(url,{email,password});

  }



  register(){

  }
}
