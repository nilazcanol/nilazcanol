import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from '../interfaces/category.interface';
import { categorySmall } from '../interfaces/categorySmall.interface';
import { resApiCategories } from '../interfaces/resApiCategories.interface';
import { resApiCategoryDeleteResponse } from '../interfaces/resApiCategoryDeleteResponse.interface';
import { resApiCategoryResponse } from '../interfaces/resApiCategoryResponse.interface';

@Injectable({
	providedIn: 'root',
})
export class CategoriesService {
	constructor(private http: HttpClient) {}

	private _urlBase = environment.URLBASE;

	getListCategories = () => {
		return [{ name: 'Grocery' }, { name: 'Dairy products' }];
	};

	getAllCategories(): Observable<resApiCategories> {
		const url: string = `${this._urlBase}/category`;
		return this.http.get<resApiCategories>(url);
	}

	getNameCategory(id: string): Observable<categorySmall> {
		const url: string = `${this._urlBase}/${id}`;
		return this.http.get<categorySmall>(url);
	}

	saveCategory(category: string) {
		const url: string = `${this._urlBase}/category`;
		return this.http.post<resApiCategoryResponse>(url, { name: category });
	}
	deleteCategory(category: category) {
		const url: string = `${this._urlBase}/category/${category.uid}`;
		return this.http.delete<resApiCategoryDeleteResponse>(url);
	}
}
