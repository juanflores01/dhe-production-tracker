import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from './movie';
import { Vam } from './vam';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl = 'api/movies';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getTitles(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getTitle(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    this.getTitleVam(id);
    return this.http.get<Movie>(url);
  }

  getTitleVam(id: number): Observable<Vam> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Vam>(url);
  }
}
