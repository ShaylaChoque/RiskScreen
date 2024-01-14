import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_Url = environment.baseURL + 'user';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  login(username: string, password: string): Observable<void> {
    const loginData = { username, password };
    return this.http.post<void>(`${this.base_Url}/sign-in`, loginData, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  signup(username: string, password: string): Observable<void> {
    const signupData = { username, password };
    return this.http.post<void>(`${this.base_Url}/sign-up`, signupData, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
