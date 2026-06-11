import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractalesComponent } from './fractales.component';

describe('FractalesComponent', () => {
  let component: FractalesComponent;
  let fixture: ComponentFixture<FractalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FractalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FractalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
