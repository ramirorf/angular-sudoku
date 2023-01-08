import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatExpansionModule} from '@angular/material/expansion';

import { PatronesComponent } from './patrones.component';

describe('PatronesComponent', () => {
  let component: PatronesComponent;
  let fixture: ComponentFixture<PatronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatronesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
