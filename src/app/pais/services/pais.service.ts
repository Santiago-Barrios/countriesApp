import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiURL: string = 'https://restcountries.com/v3.1/';

  get httpParams (){
    return new HttpParams().set(
       'fields',
       'name,capital,cca2,flags,population'
     );
     
  }

  constructor(private http: HttpClient) {}


  searchCountry(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByCode(code: string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${code}`;
    return this.http.get<Country>(url);
  }

  searchByRegion(region: string): Observable<Country[]> {

    const url = `${this.apiURL}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
