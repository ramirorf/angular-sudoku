import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sudoku1Component } from './sudoku1.component';

describe('Sudoku1Component', () => {
  let component: Sudoku1Component;
  let fixture: ComponentFixture<Sudoku1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sudoku1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sudoku1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
