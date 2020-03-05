import { Component, OnInit, Input } from '@angular/core';
import { TodoItem, TodoItemStatus } from '../models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem;

  TodoItemStatus = TodoItemStatus;
  constructor() { }

  ngOnInit(): void {
  }

}
