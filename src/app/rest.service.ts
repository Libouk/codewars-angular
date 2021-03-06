import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = 'http://localhost:8000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getChallenges(): Observable<any> {
    return this.http.get(this.endpoint + 'challenges').pipe(
      map(this.extractData));
  }
}
