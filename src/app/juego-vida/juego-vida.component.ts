import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-vida',
  templateUrl: './juego-vida.component.html',
  styleUrls: ['./juego-vida.component.css']
})
export class JuegoVidaComponent implements OnInit {

  TABLERO_SIZE : number = 100; 

  juegoVidaTablero : boolean[][] = [];

  paso : number = 0;

  constructor() { }

  ngOnInit(): void {
      this.juegoVidaTablero = this.intTablero(this.TABLERO_SIZE);
  }

  onSiguientePaso(): void {
    this.juegoVidaTablero = this.actualizarTablero(this.juegoVidaTablero, this.TABLERO_SIZE);
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

  intTableroVacio(size : number) {
    let tablero : boolean[][] = [];
    for(let i=0;i<size;i++){
      let fila : boolean [] = [];
      for(let j=0;j<size;j++) {
        fila.push(false);
      } 
      tablero.push(fila);
    } 
    return tablero;
  }

  actualizarTablero(juegoVidaTablero: boolean[][], size: number) {
    let juegoVidaTableroNuevo = this.intTableroVacio(size);
    for(let i=0;i<size;i++)
    for(let j=0;j<size;j++) {
      let filasAlrededorVivas = this.getFilasAlrededorVivas(juegoVidaTablero,size,i,j);
      if (juegoVidaTablero[i][j]) {
        juegoVidaTableroNuevo[i][j] = (filasAlrededorVivas > 1 && filasAlrededorVivas < 4); 
      } else {
        juegoVidaTableroNuevo[i][j] = (filasAlrededorVivas == 3) ; 
      }
    }
    return juegoVidaTableroNuevo;    
  }

  getFilasAlrededorVivas(juegoVidaTablero: boolean[][], size: number, x: number, y:number) {
    let filasAlrededorVivas = 0;
    for(let i=x-1;i<x+1;i++)
    for(let j=y-1;j<y+1;j++) {
      if(i>0 && i<size && j>0 && j<size && juegoVidaTablero[i][j]) {
        filasAlrededorVivas++;
      }
    }
    return filasAlrededorVivas;
  }
}

