import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteTrainInfoComponent } from './auto-complete-train-info.component';

describe('AutoCompleteTrainInfoComponent', () => {
  let component: AutoCompleteTrainInfoComponent;
  let fixture: ComponentFixture<AutoCompleteTrainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteTrainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteTrainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
