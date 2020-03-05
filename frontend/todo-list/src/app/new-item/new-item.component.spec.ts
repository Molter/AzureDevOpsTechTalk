import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NewItemComponent } from './new-item.component';
import { TodoListService } from '../services/todo-list.service';
import { MaterialModule } from '../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewItemComponent', () => {
  let component: NewItemComponent;
  let fixture: ComponentFixture<NewItemComponent>;

  let todoServiceSpy: jasmine.SpyObj<TodoListService>;

  beforeEach(async(() => {
    todoServiceSpy = jasmine.createSpyObj('TodoListService', ['get', 'put', 'post', 'delete']);

    TestBed.configureTestingModule({
      declarations: [ NewItemComponent ],
      imports: [ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
      providers: [
        { provide: TodoListService, useValue: todoServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
