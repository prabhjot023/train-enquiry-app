import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTrainStatusComponent } from './live-train-status.component';

describe('LiveTrainStatusComponent', () => {
  let component: LiveTrainStatusComponent;
  let fixture: ComponentFixture<LiveTrainStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTrainStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTrainStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
