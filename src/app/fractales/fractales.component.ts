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
    this.drawTriangleAngle(100);
  }

  // métodos de dibujo

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

  drawTriangleAngle(side: number) {
    // inicializar
    let ctx = this.getContext2D();
    let x=-side/2,y=0;
    ctx.moveTo(x, y);
    console.log("x = "+x+" y = "+y);

    // dibujar línea
    let angle=0;
    x+=Math.cos(angle*Math.PI/180)*side;
    y+=Math.sin(angle*Math.PI/180)*side;
    ctx.lineTo(x,-y);
    console.log("x = "+x+" y = "+y);

    // dibujar línea
    angle+=180-60;
    x+=Math.cos(angle*Math.PI/180)*side;
    y+=Math.sin(angle*Math.PI/180)*side;
    //x=0;
    //y=100;
    ctx.lineTo(x,-y);
    console.log("x = "+x+" y = "+y+" angle " + angle);

    // dibujar línea
    angle+=180-60;
    x+=Math.cos(angle*Math.PI/180)*side;
    y+=Math.sin(angle*Math.PI/180)*side;
    //x=0;
    //y=100;
    ctx.lineTo(x,-y);
    console.log("x = "+x+" y = "+y+" angle " + angle);

    /*
    ctx.moveTo(-100, 0);
    ctx.lineTo(100, 0);
    ctx.lineTo(0, -200);
    ctx.lineTo(-100, 0);
    */
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
      } else {
        throw new Error('No canvas available');
      }   
    }
    return this.context2D;
  }

}
