import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { TodoListService } from '../services/todo-list.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoItem, TodoItemStatus } from '../models/todo-item';
import { of } from 'rxjs';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let todoServiceSpy: jasmine.SpyObj<TodoListService>;
  let sampleItem: TodoItem;

  beforeEach(async(() => {
    todoServiceSpy = jasmine.createSpyObj('TodoListService', ['get', 'put', 'post', 'delete']);
    sampleItem = new TodoItem();
    sampleItem.id = 0; sampleItem.description = 'TestITem'; sampleItem.index = 0; sampleItem.status = TodoItemStatus.TODO;

    todoServiceSpy.get.and.returnValue(of(
      [sampleItem]
    ));

    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ],
      imports: [ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        { provide: TodoListService, useValue: todoServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todoItem = sampleItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
