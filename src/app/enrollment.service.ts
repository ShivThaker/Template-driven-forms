import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  _url = 'http://localhost:3000/enroll'; // url where we post the data
  constructor(private _http: HttpClient) {}

  enroll(user: User) {
    // which will make the post request
    // the post request will return the response as an observable
    return this._http
      .post<any>(this._url, user)
      .pipe(catchError(this.errorHandler));
  }

  // here we catch the error from the server and throw it to the subscribed component
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
