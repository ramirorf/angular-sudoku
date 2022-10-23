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
      this.juegoVidaTablero = this.intTableroPrimerCañon(this.TABLERO_SIZE);
  }

  onSiguientePaso(): void {
    this.juegoVidaTablero = this.actualizarTablero(this.juegoVidaTablero, this.TABLERO_SIZE);
    this.paso++;
  }

  intTablero(size : number) {
    let tablero = this.intTableroVacio(size);
    for(let i=0;i<size;i++){
      for(let j=0;j<size;j++) {
        tablero[i][j]=((i+j)%2 == 1);
      } 
    } 
    return tablero;
  }

  intTableroPrimerCañon(size : number) {
    let tablero = this.intTableroVacio(size);
    tablero[4][0] = true;
    tablero[5][0] = true;
    tablero[4][10] = true;
    tablero[5][10] = true;
    tablero[6][10] = true;
    tablero[3][11] = true;
    tablero[7][11] = true;
    tablero[2][12] = true;
    tablero[8][12] = true;
    tablero[2][13] = true;
    tablero[8][13] = true;
    tablero[5][14] = true;
    tablero[3][15] = true;
    tablero[7][15] = true;
    tablero[4][16] = true;
    tablero[5][16] = true;
    tablero[6][16] = true;
    tablero[5][17] = true;
    tablero[2][20] = true;
    tablero[3][20] = true;
    tablero[4][20] = true;
    tablero[2][21] = true;
    tablero[3][21] = true;
    tablero[4][21] = true;
    tablero[1][22] = true;
    tablero[5][22] = true;
    tablero[0][24] = true;
    tablero[1][24] = true;
    tablero[5][24] = true;
    tablero[6][24] = true;
    tablero[2][34] = true;
    tablero[3][34] = true;
    tablero[2][35] = true;
    tablero[3][35] = true;

    tablero[80][40] = true;
    tablero[81][40] = true;
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
    for(let i=x-1;i<=x+1;i++)
    for(let j=y-1;j<=y+1;j++) {
      if(i>0 && i<size && j>0 && j<size && !(i==x && j==y) && juegoVidaTablero[i][j]) {
        filasAlrededorVivas++;
      }
    }
    return filasAlrededorVivas;
  }
}

