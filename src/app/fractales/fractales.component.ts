import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fractales',
  templateUrl: './fractales.component.html',
  styleUrls: ['./fractales.component.css']
})
export class FractalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSiguientePaso(): void {
    // obtener el contexto de dibujo 2d del canvas
    let canvas = document.getElementById('fractal-canvas') as HTMLCanvasElement;
    let ctx = canvas.getContext('2d');
    if (ctx) {
      // dibujar línea
      ctx.moveTo(0, 0);
      ctx.lineTo(200, 100);
      ctx.stroke();
    }
  }

}
