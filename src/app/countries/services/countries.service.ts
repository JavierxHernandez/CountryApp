import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map, Observable, of} from 'rxjs';
import {Country} from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(err => of(null))
      );
  }

  searchCapital(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(err => of([]))
      );
  }

  searchCountry(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(err => of([]))
      )
  }

  searchRegion(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${query}`
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(err => of([]))
      )
  }

}
