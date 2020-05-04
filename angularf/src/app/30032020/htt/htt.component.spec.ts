import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttComponent } from './htt.component';

describe('HttComponent', () => {
  let component: HttComponent;
  let fixture: ComponentFixture<HttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
