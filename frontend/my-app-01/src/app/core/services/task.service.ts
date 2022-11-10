import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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

  addTask(task: Task): Observable<Task> {
    return this.http
      .post(baseUrl, task, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(catchError(this.handleError));
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
