import { Injectable } from '@angular/core';
import { of, Observable, EMPTY } from 'rxjs';
import { TodoItem, TodoItemStatus } from '../models/todo-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private url: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.url = environment.api_url;
   }

  public get(): Observable<TodoItem[]> {

    return this.http.get<TodoItem[]>(this.url);

  }

  public put(todoItem: TodoItem) {
    return this.http.put<TodoItem>(this.url, todoItem, this.httpOptions);
  }

  public post(newItem: TodoItem) {
    return this.http.post<TodoItem>(this.url, newItem, this.httpOptions);
  }

  public delete(todoItem: TodoItem) {
    const url = `${this.url}/${todoItem.id}`;

    return this.http.delete(url, this.httpOptions);
  }
}
