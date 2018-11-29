import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInterviewComponent } from './assign-interview.component';

describe('AssignInterviewComponent', () => {
  let component: AssignInterviewComponent;
  let fixture: ComponentFixture<AssignInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
