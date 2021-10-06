import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { resApiCategories } from '../interfaces/resApiCategories.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

  constructor(private http:HttpClient) {}
  
  private _urlBase = environment.URLBASE;

  getListCategories = () => {
    return [{ name: 'Grocery' }, { name: 'Dairy products' }]
  }


  getAllCategories():Observable<resApiCategories> {
    const url:string = `${this._urlBase}/category` 
    return this.http.get<resApiCategories>(url);
  }

  
}
