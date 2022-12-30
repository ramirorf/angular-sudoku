import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fractales',
  templateUrl: './fractales.component.html',
  styleUrls: ['./fractales.component.css']
})
export class FractalesComponent implements OnInit {

  height : number = 1000;
  width : number = 1000;
  context2D : CanvasRenderingContext2D | null = null;

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSiguientePaso(): void {
    this.drawLine();
  }

  // métodos de dibujo

  drawLine() {
    // dibujar línea
    let ctx = this.getContext2D();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  }

  // auxiliares

  private getContext2D () {
    if ( !this.context2D ) {
      // obtener el contexto de dibujo 2d del canvas
      let canvas = document.getElementById('fractal-canvas') as HTMLCanvasElement;
      this.context2D = canvas.getContext('2d');
      if (this.context2D) {
        this.context2D.translate(this.width/2, this.height/2);
      } 
      throw new Error('No canvas available');
    }
    return this.context2D;
  }

}
