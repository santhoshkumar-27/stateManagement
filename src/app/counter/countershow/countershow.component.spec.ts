import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountershowComponent } from './countershow.component';

describe('CountershowComponent', () => {
  let component: CountershowComponent;
  let fixture: ComponentFixture<CountershowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountershowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountershowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
