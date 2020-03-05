import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem, TodoItemStatus } from '../models/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem;
  @Output() itemDeleted = new EventEmitter<TodoItem>();

  TodoItemStatus = TodoItemStatus;
  constructor(private todoService: TodoListService) { }

  ngOnInit(): void {
  }

  delete(event) {
    this.todoService.delete(this.todoItem).subscribe( _ => {
      this.itemDeleted.emit(this.todoItem);
    });
  }
}
