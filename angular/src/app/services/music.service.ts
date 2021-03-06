import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  baseURL: string = `${environment.baseURL}/api/music`;
  artistsURL: string = `${this.baseURL}/artists`;
  genresURL: string = `${this.baseURL}/genres`;
  concertDetailsURL: string = `${this.baseURL}/concerts`;

  constructor(private http: HttpClient) { }

  artists(userId): Observable<Object> {
    return this.http.get(this.artistsURL + '?userId=' + userId);
  }

  genres(): Observable<Object> {
    return this.http.get(this.genresURL);
  }

  concert(concertId: number): Observable<Object> {
    return this.http.get(this.concertDetailsURL + '?concertId=' + concertId);
  }
}
