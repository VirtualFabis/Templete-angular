import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QflassignpageComponent } from './qflassignpage.component';

describe('QflassignpageComponent', () => {
  let component: QflassignpageComponent;
  let fixture: ComponentFixture<QflassignpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QflassignpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QflassignpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
