import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = `${environment.baseURL}/api/user`;
  saveGenreURL: string = `${this.baseURL}/genres`;
  recommendationsURL: string = `${this.baseURL}/recommendations`;
  httpOptions: Object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  saveGenre(userId, genreID, like): Observable<Object> {
    const reqBody = {
      userId: userId,
      genreId: genreID,
      like: like
    };
    return this.http.post(this.saveGenreURL, reqBody, this.httpOptions);
  }

  recommendations(): Observable<Object> {
    const user = JSON.parse(localStorage.getItem(environment.lsLoginKey));
    return this.http.get(this.recommendationsURL + '?userId=' + user.id);
  }
}
