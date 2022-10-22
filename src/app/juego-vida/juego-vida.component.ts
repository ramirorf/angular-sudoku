import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-vida',
  templateUrl: './juego-vida.component.html',
  styleUrls: ['./juego-vida.component.css']
})
export class JuegoVidaComponent implements OnInit {

  TABLERO_SIZE : number = 10; 

  juegoVidaTablero : boolean[][] = [];

  paso : number = 0;

  constructor() { }

  ngOnInit(): void {
      this.juegoVidaTablero = this.intTablero(this.TABLERO_SIZE);
  }

  onAnteriorPaso(): void {
    if (this.paso > 0) {
      this.paso--;
    }
  }

  onSiguientePaso(): void {
    this.paso++;
  }

  intTablero(size : number) {
    let tablero : boolean[][] = [];
    for(let i=0;i<size;i++){
      let fila : boolean [] = [];
      for(let j=0;j<size;j++) {
        fila.push((i+j)%2 == 1);
      } 
      tablero.push(fila);
    } 
    return tablero;
  }

}
