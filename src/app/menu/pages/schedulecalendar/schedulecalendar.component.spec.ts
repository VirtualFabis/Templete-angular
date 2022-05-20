import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulecalendarComponent } from './schedulecalendar.component';

describe('SchedulecalendarComponent', () => {
  let component: SchedulecalendarComponent;
  let fixture: ComponentFixture<SchedulecalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulecalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulecalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
