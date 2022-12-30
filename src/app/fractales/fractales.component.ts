
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plotter } from './modelo/plotter';


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
    this.drawTriangleAngle(100);
  }

  onLimpiar(): void {
    this.clear();
  }

  // métodos de dibujo
/*
  drawLine() {
    // dibujar línea
    let ctx = this.getContext2D();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  }

  drawTriangle() {
    // dibujar línea
    let ctx = this.getContext2D();
    ctx.moveTo(-100, 0);
    ctx.lineTo(100, 0);
    ctx.lineTo(0, -200);
    ctx.lineTo(-100, 0);
    ctx.stroke();
  }
*/

  drawTriangleAngle(side: number) {
    const plotter = new Plotter(this.getContext2D());

//  this.getContext2D().beginPath();

    plotter.setPosition(side/2, 0);
    plotter.draw(side,0);
    plotter.draw(side,180-60);
    plotter.draw(side,180-60);

    this.getContext2D().stroke();
//    this.getContext2D().closePath();
  }

  // auxiliares

  private clear() {
    console.log('limpiar')
    let canvas = document.getElementById('fractal-canvas') as HTMLCanvasElement;
    let context2D = canvas.getContext('2d');
    context2D?.clearRect(0, 0, 1000, 1000);
  }

  private getContext2D () {
    if ( !this.context2D ) {
      // obtener el contexto de dibujo 2d del canvas
      let canvas = document.getElementById('fractal-canvas') as HTMLCanvasElement;
      this.context2D = canvas.getContext('2d');
      if (this.context2D) {
        this.context2D.beginPath();
        this.context2D.translate(this.width/2, this.height/2);
      } else {
        throw new Error('No canvas available');
      }   
    }
    return this.context2D;
  }

}
