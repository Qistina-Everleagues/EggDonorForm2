import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggdonationComponent } from './eggdonation.component';

describe('EggdonationComponent', () => {
  let component: EggdonationComponent;
  let fixture: ComponentFixture<EggdonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggdonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggdonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
