import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Plotter } from './modelo/plotter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
    selector: 'app-fractales',
    templateUrl: './fractales.component.html',
    styleUrls: ['./fractales.component.css'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatFormFieldModule, MatSelectModule]
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
    } else if (this.fractal == 'Circle') {
        this.drawCircle(this.width/4);
    } else if (this.fractal == 'Koch') {
        this.drawKoch(this.width,this.nivel++);
    } else if (this.fractal == 'Snowflake Koch') {
      this.drawSnowflakeKoch(this.width/2,this.nivel++);
    } else if (this.fractal == 'Anti Snowflake Koch') {
      this.drawAntiSnowflakeKoch(this.width/2,this.nivel++);
    } else if (this.fractal == 'Cesaro') {
      this.drawCesaro(this.width/3,this.nivel++);
    } else if (this.fractal == 'Cesaro Puro') {
      this.drawCesaroPuro(this.width/2,this.nivel++);
    } else if (this.fractal == 'Sierpinski Carpet') {
      this.drawSierpinskiCarpet(this.nivel++);
    } else if (this.fractal == 'Julia') {
      this.drawJulia(this.nivel++);
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

  drawCircle(radius: number) {
    const plotter = new Plotter(this.getContext2D());
    plotter.start();
    plotter.setPosition(0, this.width / 2);
    const context = this.getContext2D();
    context.beginPath();
    context.arc(this.height / 2, this.width / 2, radius / 2, 0, 2 * Math.PI);
    context.stroke();
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

  drawSierpinskiCarpet(n: number) {
    const context = this.getContext2D();
    const size = Math.min(this.width, this.height) * 0.8;
    const x = (this.width - size) / 2;
    const y = (this.height - size) / 2;
    this.drawSierpinskiCarpetInternal(context, x, y, size, n);
  }

  drawSierpinskiCarpetInternal(context: CanvasRenderingContext2D, x: number, y: number, size: number, n: number) {
    if (n === 0) {
      context.fillRect(x, y, size, size);
    } else {
      const newSize = size / 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (!(i === 1 && j === 1)) { // Skip the center square
            this.drawSierpinskiCarpetInternal(context, x + i * newSize, y + j * newSize, newSize, n - 1);
          }
        }
      }
    }
  }

  drawJulia(maxIter: number) {
    const context = this.getContext2D();
    const imageData = context.createImageData(this.width, this.height);
    const data = imageData.data;

    const c_real = -0.7;
    const c_imag = 0.27015;
    const max_iter = maxIter;
    const min_real = -2.0;
    const max_real = 2.0;
    const min_imag = -1.25;
    const max_imag = 1.25;

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const z_real = (x / this.width) * (max_real - min_real) + min_real;
        const z_imag = (y / this.height) * (max_imag - min_imag) + min_imag;

        let iter = 0;
        let zr = z_real;
        let zi = z_imag;

        while (zr * zr + zi * zi < 4 && iter < max_iter) {
          const zr_temp = zr * zr - zi * zi + c_real;
          zi = 2 * zr * zi + c_imag;
          zr = zr_temp;
          iter++;
        }

        const index = (y * this.width + x) * 4;
        if (iter === max_iter) {
          // Inside the set, black
          data[index] = 0;
          data[index + 1] = 0;
          data[index + 2] = 0;
          data[index + 3] = 255;
        } else {
          // Outside, color based on iterations
          const hue = (iter / max_iter) * 360;
          const color = this.hslToRgb(hue / 360, 1, 0.5);
          data[index] = color[0];
          data[index + 1] = color[1];
          data[index + 2] = color[2];
          data[index + 3] = 255;
        }
      }
    }

    context.putImageData(imageData, 0, 0);
  }

  private hslToRgb(h: number, s: number, l: number): [number, number, number] {
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
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
