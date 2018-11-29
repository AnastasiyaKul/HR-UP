import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceInfoComponent } from './add-experience-info.component';

describe('AddExperienceInfoComponent', () => {
  let component: AddExperienceInfoComponent;
  let fixture: ComponentFixture<AddExperienceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExperienceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExperienceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
