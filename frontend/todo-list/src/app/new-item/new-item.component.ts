import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  @Output() itemCreated = new EventEmitter<TodoItem>();

  todoItemForm = this.fb.group({
    description: [null, Validators.compose([
      Validators.required, Validators.minLength(1), Validators.maxLength(80)])
    ]
  });
  constructor(private fb: FormBuilder, private todoService: TodoListService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const todoItem = new TodoItem();
    todoItem.description = this.todoItemForm.controls.description.value;

    this.todoService.post(todoItem).subscribe( i =>
      {
        this.itemCreated.emit(i);
        this.todoItemForm.reset(); // resets the input
      }
    );
  }

}
