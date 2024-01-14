import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { OffshoreEntity } from '../models/offshore-entity.model'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebscrapingService {

  base_Url = environment.baseURL;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred ${error.status}, body was: ${error.error}`);
    } else {
      console.log(`An error occurred ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with the request, try again later...')
  }

  getList(entityName: string): Observable<OffshoreEntity[]> {
    const urlWithParam = `${this.base_Url}?entityName=${entityName}`;
    return this.http.get<OffshoreEntity[]>(urlWithParam)
      .pipe(retry(2), catchError(this.handleError))
  }
}
