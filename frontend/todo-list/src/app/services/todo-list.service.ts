import { Injectable } from '@angular/core';
import { of, Observable, EMPTY } from 'rxjs';
import { TodoItem, TodoItemStatus } from '../models/todo-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private url = 'https://localhost:44328/TodoItem';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public get(): Observable<TodoItem[]> {

    return this.http.get<TodoItem[]>(this.url);

  }

  public put(todoItem: TodoItem) {
    return this.http.put<TodoItem[]>(this.url, todoItem, this.httpOptions);
  }

  public post(todoItem: TodoItem) {
    return this.http.post<TodoItem[]>(this.url, todoItem, this.httpOptions);
  }
}
