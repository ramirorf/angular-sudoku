import { Component, OnInit } from '@angular/core';
import { Poligono } from './model/poligono';
import { JerarquiaComunicacionHijoComponent } from "./jerarquia-comunicacion-hijo/jerarquia-comunicacion-hijo.component";

@Component({
  selector: 'app-jerarquia-comunicacion',
  imports: [JerarquiaComunicacionHijoComponent,JerarquiaComunicacionHijoComponent],
  templateUrl: './jerarquia-comunicacion.component.html',
  styleUrl: './jerarquia-comunicacion.component.css'
})
export class JerarquiaComunicacionComponent  implements OnInit {

  figura: string = "poligono";
  contador: number = 0;

  poligonos: Poligono[] = [
    {nombre: "triangulo", vertices: 3},
    {nombre: "cuadrado", vertices: 4},
    {nombre: "pentágono", vertices: 4}
  ];

  ngOnInit(): void {
  }

  manejarClicDelHijo(){
    this.contador++;
  }
   
}
