
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

  @ViewChild ('canvas', {static : true}) myCanvas! : ElementRef;

  nivel : number;

  constructor() {
    this.nivel=0; 
  }

  ngOnInit(): void {
  }

  onSiguientePaso(): void {
    this.clear();
    this.drawKorn(this.width,this.nivel++);
  }

  onLimpiar(): void {
    this.nivel=0;
    this.clear();
  }

  // ------------
  // métodos de dibujo
  // ------------

  drawTriangleAngle(side: number) {
    const plotter = new Plotter(this.getContext2D());

    plotter.setPosition(this.height/2, this.width/2);
    plotter.draw(side,0);
    plotter.draw(side,180-60);
    plotter.draw(side,180-60);

    this.getContext2D().stroke();
  }

  drawKorn(side: number, n : number) {
    this.getContext2D().beginPath();

    const plotter = new Plotter(this.getContext2D());
    plotter.setPosition(0, this.width/2);
    this.drawKornInternal(plotter, side, n);
    
    this.getContext2D().stroke();
  }

  drawKornInternal(plotter: Plotter, side: number, n : number) {
    if ( n == 0) {
      plotter.draw(side,0);
    } else {
      const sizeEfective = side/3;
      this.drawKornInternal(plotter, sizeEfective, n-1);
      plotter.increaseAngle(60);
      this.drawKornInternal(plotter, sizeEfective, n-1);
      plotter.increaseAngle(-60*2);
      this.drawKornInternal(plotter, sizeEfective, n-1);
      plotter.increaseAngle(60);
      this.drawKornInternal(plotter, sizeEfective, n-1);
    }
  }

  // ------------
  // auxiliares
  // ------------

  private clear() {
    console.log('limpiar')
    let canvas = document.getElementById('fractal-canvas') as HTMLCanvasElement;
    let context2D = canvas.getContext('2d');
    context2D?.clearRect(0, 0, 1000, 1000);
  }
  
  // singleton del contexto 2D del canvas
  private getContext2D () {
    const canvas : HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
    if ( context ) {
      return context;
    }
    throw new Error('No canvas available');
  }

}
