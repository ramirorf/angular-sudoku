import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Poligono } from './model/poligono';
import { JerarquiaComunicacionHijoComponent } from "./jerarquia-comunicacion-hijo/jerarquia-comunicacion-hijo.component";
import { JerarquiaComunicacionHijoSignalsComponent } from './jerarquia-comunicacion-hijo-signals/jerarquia-comunicacion-hijo-signals.component';
import { JerarquiaComunicacionHijoTwoWaysComponent } from './jerarquia-comunicacion-hijo-signals-two-ways/jerarquia-comunicacion-hijo-two-ways.component';

@Component({
  selector: 'app-jerarquia-comunicacion',
  standalone: true,
  imports: [JerarquiaComunicacionHijoComponent,
            JerarquiaComunicacionHijoSignalsComponent,
            JerarquiaComunicacionHijoTwoWaysComponent],
  templateUrl: './jerarquia-comunicacion.component.html',
  styleUrl: './jerarquia-comunicacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JerarquiaComunicacionComponent {

  figuraPadre: string = "poligono";
  figuraPadreSignal: string = "circulo";
  contador: number = 0;
  contadorSignalPadre : number = 0;

  poligonos: Poligono[] = [
    {nombre: "triangulo", vertices: 3},
    {nombre: "cuadrado", vertices: 4},
    {nombre: "pentágono", vertices: 4}
  ];

  manejarClicDelHijo(){
    this.contador++;
  }

}
