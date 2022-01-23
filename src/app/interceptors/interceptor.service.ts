import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpHeaders,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const headers = new HttpHeaders().set(
			'x-token',
			localStorage.getItem('token') || ''
		);
		const reqClone = req.clone({
			headers,
		});
		return next.handle(reqClone).pipe(catchError(this.manageErrors));
	}

	manageErrors(error: HttpErrorResponse) {
		return throwError(error.error.msg);
	}
}
