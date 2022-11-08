import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

const baseUrl = 'http://localhost:3000/api/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  TASKS: Task[] = [];
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(baseUrl);
  }
}
