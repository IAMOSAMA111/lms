import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassinmentComponent } from './viewassinment.component';

describe('ViewassinmentComponent', () => {
  let component: ViewassinmentComponent;
  let fixture: ComponentFixture<ViewassinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewassinmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewassinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
