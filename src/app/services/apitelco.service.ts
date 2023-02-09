
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApitelcoService {

  constructor(private http: HttpClient) { }

  getConfig(): Observable<any> {

    var reqHeader = new HttpHeaders({ 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
       });

    return this.http.get('/api/consumidor/rest/api/catalogo/recarga', { headers: reqHeader }).pipe(
         catchError((errorResponse: any) => this.handleError(errorResponse))
       );
  }

  handleError(errorResponse: HttpErrorResponse): Observable<any> {
    return throwError(errorResponse);
  }

  getConfig2(): Observable<any> {

    var reqHeader = new HttpHeaders({ 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
       });

    return this.http.get('/api/consumidor/rest/api/catalogo/redes', { headers: reqHeader }).pipe(
         catchError((errorResponse: any) => this.handleError(errorResponse))
       );
  }

  getConfig3(): Observable<any> {

    var reqHeader = new HttpHeaders({ 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
       });

    return this.http.get('/api/consumidor/rest/api/catalogo/internet', { headers: reqHeader }).pipe(
         catchError((errorResponse: any) => this.handleError(errorResponse))
       );
  }

}
