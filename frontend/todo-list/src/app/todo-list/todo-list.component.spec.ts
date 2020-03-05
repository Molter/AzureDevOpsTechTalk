import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoListService } from '../services/todo-list.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoItem, TodoItemStatus } from '../models/todo-item';
import { of } from 'rxjs';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
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
      declarations: [ TodoListComponent ],
      imports: [ReactiveFormsModule, MaterialModule, BrowserAnimationsModule, HttpClientTestingModule],
      providers: [
        { provide: TodoListService, useValue: todoServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
