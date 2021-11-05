import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from '../interfaces/category/category.interface';
import { categorySmall } from '../interfaces/category/categorySmall.interface';
import { resApiCategories } from '../interfaces/resApi/resApiCategories.interface';
import { resApiCategoryDeleteResponse } from '../interfaces/resApi/resApiCategoryDeleteResponse.interface';
import { resApiCategoryResponse } from '../interfaces/resApi/resApiCategoryResponse.interface';

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
		const headers = new HttpHeaders().set(
			'x-token',
			localStorage.getItem('token') || ''
		);
		return this.http.get<resApiCategories>(url, { headers });
	}

	getNameCategory(id: string): Observable<categorySmall> {
		const url: string = `${this._urlBase}/${id}`;
		const headers = new HttpHeaders().set(
			'x-token',
			localStorage.getItem('token') || ''
		);
		return this.http.get<categorySmall>(url, { headers });
	}

	saveCategory(category: string) {
		const url: string = `${this._urlBase}/category`;
		const headers = new HttpHeaders().set(
			'x-token',
			localStorage.getItem('token') || ''
		);
		return this.http.post<resApiCategoryResponse>(
			url,
			{ name: category },
			{ headers }
		);
	}

	updateCategory(categoryID: string, categoryName: string) {
		const url: string = `${this._urlBase}/category/${categoryID}`;
		const headers = new HttpHeaders().set(
			'x-token',
			localStorage.getItem('token') || ''
		);
		return this.http.put<resApiCategoryResponse>(
			url,
			{ name: categoryName },
			{ headers }
		);
	}

	deleteCategory(category: category) {
		const url: string = `${this._urlBase}/category/${category.uid}`;
		const headers = new HttpHeaders().set(
			'x-token',
			localStorage.getItem('token') || ''
		);
		return this.http.delete<resApiCategoryDeleteResponse>(url, { headers });
	}
}
