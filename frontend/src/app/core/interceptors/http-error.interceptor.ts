import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(`[HTTP Error] ${error.status} — ${req.url}`, error.message);
      return throwError(() => error);
    }),
  );
};
