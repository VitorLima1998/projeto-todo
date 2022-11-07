import { catchError, Observable, pipe, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

const baseUrl = 'http://localhost:3000/api/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  USERS: User[] = [];
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${baseUrl}/list/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http
      .post(baseUrl, user, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // updateUser(newUser: User): Observable<User> {
  //   return this.http.put(baseUrl, newUser);
  // }

  updateUser(user: User, id: string): Observable<User> {
    return this.http.put<User>(`${baseUrl}/${id}`, user);
  }

  removeUser(id: string): Observable<User> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByName(name: string): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}?name= ${name}`);
  }

  findByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}?name=${email}`);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    return throwError(
      () =>
        'There is a problem with the service. We are notified & working on it. Please try again later.'
    );
  }
}
