import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Persona } from './persona';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import * as data from './datos.json'

@Injectable()
export class PersonaService {
  
  private url : string = './datos.json';
  
  constructor(private http: HttpClient) { }
  
  // getPersonas(): Observable<Persona[]> | Promise<Persona[]> {
  //   console.log(data);
  //   console.log(data[0]);
  //   console.log(<Persona>data[1]);
    // return new Promise((resolve, reject) => resolve(data));
    // return null;
    /*
    return this.http.get<Persona[]>(this.url)
    .pipe(
      tap(personas => this.log(`fetched personas`)),
      catchError(this.handleError('getPersonas', []))
    );
    */
    
  // }  
  getPersonas(): Persona[] {
    return <any>data;
  }
  
  
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
  
  
}
