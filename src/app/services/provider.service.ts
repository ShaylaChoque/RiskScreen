import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Provider } from '../models/provider.model'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  base_Url = environment.baseURL;

  constructor( private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  handleError( error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(`An error occured ${error.status}, body was: ${error.error}`);
    } else {
      console.log(`An error occured ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, try again later...')
  }
  createItem(item: any): Observable<Provider>{
    return this.http
    .post<Provider>(this.base_Url, JSON.stringify(item), this.httpOptions)
    .pipe(retry(2), catchError(this.handleError))
  }
  getList(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.base_Url)
      .pipe(retry(2), catchError(this.handleError))
  }
  updateItem(id: number, item: any): Observable<Provider>{
    return this.http
    .put<Provider>(this.base_Url + '/' + id, JSON.stringify(item), this.httpOptions)
    .pipe(retry(2), catchError(this.handleError))
  }
  deleteItem(id: number): Observable<Provider>{
    return this.http
    .delete<Provider>(`${this.base_Url}/${id}`, this.httpOptions)
    .pipe(retry(2), catchError(this.handleError))
  }
}
