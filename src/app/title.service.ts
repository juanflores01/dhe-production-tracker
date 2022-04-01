import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Title } from './title';
import { Vam } from './vam';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private titlesUrl = 'api/titles';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getTitles(): Observable<Title[]> {
    return this.http.get<Title[]>(this.titlesUrl);
  }

  getTitle(id: number): Observable<Title> {
    const url = `${this.titlesUrl}/${id}`;
    this.getTitleVam(id);
    return this.http.get<Title>(url);
  }

  getTitleVam(id: number): Observable<Vam> {
    const url = `${this.titlesUrl}/${id}`;
    return this.http.get<Vam>(url);
  }
}
