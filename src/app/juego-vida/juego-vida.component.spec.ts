import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoVidaComponent } from './juego-vida.component';

describe('JuegoVidaComponent', () => {
  let component: JuegoVidaComponent;
  let fixture: ComponentFixture<JuegoVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoVidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
