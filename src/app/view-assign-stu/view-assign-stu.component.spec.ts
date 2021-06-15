import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignStuComponent } from './view-assign-stu.component';

describe('ViewAssignStuComponent', () => {
  let component: ViewAssignStuComponent;
  let fixture: ComponentFixture<ViewAssignStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAssignStuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssignStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
