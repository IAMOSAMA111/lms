import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMaterialStuComponent } from './view-material-stu.component';

describe('ViewMaterialStuComponent', () => {
  let component: ViewMaterialStuComponent;
  let fixture: ComponentFixture<ViewMaterialStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMaterialStuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMaterialStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
