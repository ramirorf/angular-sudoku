import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JerarquiaComunicacionComponent } from './jerarquia-comunicacion.component';

describe('JerarquiaComunicacionComponent', () => {
  let component: JerarquiaComunicacionComponent;
  let fixture: ComponentFixture<JerarquiaComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JerarquiaComunicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JerarquiaComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
