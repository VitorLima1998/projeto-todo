import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
    return this.http.post(baseUrl, user);
  }

  updateUser(newUser: User): Observable<User> {
    return this.http.put(baseUrl, newUser);
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
}
