
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plotter } from './modelo/plotter';


@Component({
    selector: 'app-fractales',
    templateUrl: './fractales.component.html',
    styleUrls: ['./fractales.component.css'],
    standalone: false
})
export class FractalesComponent implements OnInit {

  // canvas
  @ViewChild ('canvas', {static : true}) myCanvas! : ElementRef;
  height : number = 500;
  width : number = 800;

  // otros datos
  fractal : string;
  nivel : number;

  constructor() {
    this.nivel=0; 
    this.fractal='Cesaro Puro';
  }

  ngOnInit(): void {
  }

  onSiguientePaso(): void {
    this.clear();
    console.log(this.fractal);
    if (this.fractal == 'Triangle') {
      this.drawTriangleAngle(100);
    } if (this.fractal == 'Koch') {
        this.drawKoch(this.width,this.nivel++);
    } else if (this.fractal == 'Snowflake Koch') {
      this.drawSnowflakeKoch(this.width/2,this.nivel++);
    } else if (this.fractal == 'Anti Snowflake Koch') {
      this.drawAntiSnowflakeKoch(this.width/2,this.nivel++);
    } else if (this.fractal == 'Cesaro') {
      this.drawCesaro(this.width/3,this.nivel++);
    } else if (this.fractal == 'Cesaro Puro') {
      this.drawCesaroPuro(this.width/2,this.nivel++);
    }    
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
    plotter.start();
    plotter.setPosition(this.height/2, this.width/2);
    plotter.draw(side,0);
    plotter.draw(side,180-60);
    plotter.draw(side,180-60);
    plotter.stop();
  }

  drawKoch(side: number, n : number) {
    const plotter = new Plotter(this.getContext2D());
    plotter.start();
    plotter.setPosition(0, this.width/2);
    this.drawKochInternal(plotter, side, n);
    plotter.stop();
  }

  drawKochInternal(plotter: Plotter, side: number, n : number) {
    if ( n == 0) {
      plotter.draw(side,0);
    } else {
      const sizeEfective = side/3;
      this.drawKochInternal(plotter, sizeEfective, n-1);
      plotter.increaseAngle(60);
      this.drawKochInternal(plotter, sizeEfective, n-1);
      plotter.increaseAngle(-60*2);
      this.drawKochInternal(plotter, sizeEfective, n-1);
      plotter.increaseAngle(60);
      this.drawKochInternal(plotter, sizeEfective, n-1);
    }
  }

  drawSnowflakeKoch(side: number, n : number) {
    const plotter = new Plotter(this.getContext2D());
    plotter.start();
    plotter.setPosition(this.height/9, this.width/6);
    this.drawKochInternal(plotter, side, n);
    plotter.increaseAngle(-120);
    this.drawKochInternal(plotter, side, n);
    plotter.increaseAngle(-120);
    this.drawKochInternal(plotter, side, n); 
    plotter.stop();
  }

  drawAntiSnowflakeKoch(side: number, n : number) {
    const plotter = new Plotter(this.getContext2D());
    plotter.start();
    plotter.setPosition(0, this.width/2);
    this.drawKochInternal(plotter, side, n);
    plotter.increaseAngle(180-60);
    this.drawKochInternal(plotter, side, n);
    plotter.increaseAngle(180-60);
    this.drawKochInternal(plotter, side, n); 
    plotter.stop();
  }

  drawCesaro(side: number, n : number) {
    const plotter = new Plotter(this.getContext2D());
    plotter.start();
    plotter.setPosition(this.height/9, this.width/1.9);
    this.drawGenericInternal(plotter, side, n, 85);
    plotter.increaseAngle(90);
    this.drawGenericInternal(plotter, side, n, 85);
    plotter.increaseAngle(90);
    this.drawGenericInternal(plotter, side, n, 85); 
    plotter.increaseAngle(90);
    this.drawGenericInternal(plotter, side, n, 85); 
    plotter.stop();
  }

  drawCesaroPuro(side: number, n : number) {
    const plotter = new Plotter(this.getContext2D());
    plotter.start();
    plotter.setPosition(this.height/9, this.width/1.9);
    this.drawGenericInternal(plotter, side, n, 85);
    plotter.stop();
  }


  drawGenericInternal(plotter: Plotter, side: number, n : number, angle: number) {
    if ( n == 0) {
      plotter.draw(side,0);
    } else {
      const sizeEfective = side/2.05;
      this.drawGenericInternal(plotter, sizeEfective, n-1, angle);
      plotter.increaseAngle(angle);
      this.drawGenericInternal(plotter, sizeEfective, n-1, angle);
      plotter.increaseAngle(-angle*2);
      this.drawGenericInternal(plotter, sizeEfective, n-1, angle);
      plotter.increaseAngle(angle);
      this.drawGenericInternal(plotter, sizeEfective, n-1, angle);
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
