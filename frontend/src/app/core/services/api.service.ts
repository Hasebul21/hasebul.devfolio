import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  protected readonly baseUrl = environment.apiUrl;

  protected get<T>(path: string, params?: Record<string, string>): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([k, v]) => v && (httpParams = httpParams.set(k, v)));
    }
    return this.http.get<T>(`${this.baseUrl}${path}`, { params: httpParams })
      .pipe(catchError(this.handleError));
  }

  protected post<T>(path: string, body: unknown): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${path}`, body)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let message = 'An unexpected error occurred';
    if (error.status === 0) {
      message = 'Network error: Unable to reach the server';
    } else if (error.status === 404) {
      message = 'Resource not found';
    } else if (error.status >= 500) {
      message = 'Server error. Please try again later.';
    } else if (error.error?.message) {
      message = error.error.message;
    }
    return throwError(() => new Error(message));
  }
}
