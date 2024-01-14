import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_Url = environment.baseURL + 'user';

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private handleError(error: any) {
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.status}, body was: ${error.error.message}`);
    } else {
      console.error(`An error occurred: ${error.status}, body was: ${error.error}`);
    }
    return throwError(error);
  }

  login(username: string, password: string): Observable<User> {
    const loginData = { username, password };
    return this.http.post<User>(`${this.base_Url}/sign-in`, loginData, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  signup(username: string, password: string): Observable<User> {
    const signupData = { username, password };
    return this.http.post<User>(`${this.base_Url}/sign-up`, signupData, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
}
