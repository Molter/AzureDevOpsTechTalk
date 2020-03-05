import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoItemStatus } from '../models/todo-item';
import { Observable, BehaviorSubject } from 'rxjs';
import { TodoListService } from '../services/todo-list.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todo: TodoItem[];
  done: TodoItem[];

  constructor(private todoService: TodoListService) { }

  ngOnInit(): void {
    this.todoService.get().subscribe(list => {
      this.todo = list.filter(x => x.status === TodoItemStatus.TODO);
      this.done = list.filter(x => x.status === TodoItemStatus.DONE);
      console.log(list);
    });
  }

  drop(event: CdkDragDrop<TodoItem[]>, status: TodoItemStatus) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
    const item: TodoItem = event.item.data;
    item.status = status;
    console.log(item);
    // save new modified item
    this.saveNewItemIndex(item);
  }
  saveNewItemIndex(todoItem: TodoItem) {
    this.todoService.put(todoItem).subscribe();
  }

}
