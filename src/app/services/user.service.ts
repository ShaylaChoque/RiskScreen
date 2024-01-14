import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_Url = environment.baseURL;
  private jwtHelper = new JwtHelperService();
  private authTokenKey = 'auth_token';

  constructor(private http: HttpClient) { }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  setAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  removeAuthToken(): void {
    localStorage.removeItem(this.authTokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getAuthToken();
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  httpOptions = () => {
    const token = this.getAuthToken();
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.status}, body was: ${error.error}`);
    } else {
      console.log(`An error occurred: ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with the request, try again later...');
  }

  authenticate(request: any): Observable<any> {
    return this.http.post<any>(`${this.base_Url}/sign-in`, JSON.stringify(request), this.httpOptions())
      .pipe(
        retry(2),
        catchError(this.handleError),
        tap(response => {
          if (response && response.token) {
            this.setAuthToken(response.token);
          }
        })
      );
  }

  register(request: any): Observable<any> {
    return this.http.post<any>(`${this.base_Url}/sign-up`, JSON.stringify(request), this.httpOptions())
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.base_Url}`, this.httpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.base_Url}/${id}`, this.httpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id: number, request: any): Observable<User> {
    return this.http.put<User>(`${this.base_Url}/${id}`, JSON.stringify(request), this.httpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.base_Url}/${id}`, this.httpOptions())
      .pipe(retry(2), catchError(this.handleError));
  }
}
