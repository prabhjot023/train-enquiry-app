import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationLocationComponent } from './station-location.component';

describe('StationLocationComponent', () => {
  let component: StationLocationComponent;
  let fixture: ComponentFixture<StationLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
