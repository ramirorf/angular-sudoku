import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JerarquiaComunicacionHijoComponent } from './jerarquia-comunicacion-hijo.component';

describe('JerarquiaComunicacionHijoComponent', () => {
  let component: JerarquiaComunicacionHijoComponent;
  let fixture: ComponentFixture<JerarquiaComunicacionHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JerarquiaComunicacionHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JerarquiaComunicacionHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
