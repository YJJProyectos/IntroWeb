import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Persona } from './persona';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import * as data from './datos.json'



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PersonaService {
  
  private url : string = 'http://localhost:3000/personas';
  headers = new Headers();
  
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
  // getPersonas(): Persona[] {
  //   return <any>data;
  // }
  getPersonas(): Observable<Persona[]> {
    // this.headers = new Headers();
    // this.headers.append("Content-Type", 'application/json');  
    // console.log("mi url " + this.http.get(this.url));
    // console.log(this.http.get(this.url));
    // this.http.get(url).subscribe(personas => console.log(personas));
    // this.http.get(url).map(res => console.log(res));
    return this.http.get<Persona[]>(this.url)
    // .pipe(
    //   //   tap(personas => this.log('fetched personas')),
    //   catchError(this.handleError('getPersonas', []))
    // );
  }
  
  addPersona(persona : Persona): Observable<Persona> {
    return this.http.post<Persona>(this.url, persona, httpOptions)
    .pipe(
      catchError(this.handleError('addPersona', persona))
    )
  }
  
  /** DELETE: delete the hero from the server */
  deletePersona (id: number): Observable<{}> {
    const url = `${this.url}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError('deletePersona'))
    );
  }
  /** PUT: update the persona on the server. Returns the updated persona upon success. */
  updatePersona(persona : Persona): Observable<Persona> {
    const url = this.url + '/' + persona.id;
    return this.http.put<Persona>(url, persona, httpOptions)
    // .pipe(
    //   catchError(this.handleError('updatePersona', persona))
    // );
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
