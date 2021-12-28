import { Injectable } from '@angular/core';
import { Sudoku } from '../modelo/sudoku';
import { SudokuCelda, SUDOKU_ALL_VALUES } from '../modelo/sudoku-celda';

@Injectable({
  providedIn: 'root'
})

export class SudokuServiceService {
  
  constructor() { }

  newFromSDK(sdk:string) : Sudoku {

    // normalizar la entrada
    sdk = sdk.split('\n').join('');

    // recorrer todos los elementos del sdk para crear cada celda
    let celdaTable : SudokuCelda[][] = [];
    for(var i=0; i!=9; i++) {
      let celdaRow : SudokuCelda[] = [];
      for(var j=0; j!=9; j++) {
        var celdaValues : number[] = (sdk[i*9+j] == '.') ? SUDOKU_ALL_VALUES : [+sdk[i*9+j]];
        var celda : SudokuCelda = { posibles : celdaValues }
        celdaRow.push(celda);
      }
      celdaTable.push(celdaRow);
    }

    let sudoku : Sudoku = { celdas : celdaTable };
    return sudoku; 
  }  

  siguiente(sudoku: Sudoku): Sudoku {
    let sudokuNext : Sudoku = this.copiarSudoku(sudoku);
    this.simplificar(sudokuNext);
    return sudokuNext;
  }

  simplificar(sudoku: Sudoku): void {
    // eliminar posibles  de filas, columnas y cuadrados
    for(var i=0; i!=sudoku.celdas.length; i++) {
      for(var j=0; j!=sudoku.celdas[i].length; j++) {
        // si hay valor definido
        if (sudoku.celdas[i][j].posibles.length == 1) {
          const valor : number = sudoku.celdas[i][j].posibles [0];
          // simplificar la fila
          {
            let celdasFila : SudokuCelda[] = this.getFila(sudoku,i);
            this.simplificarGrupo(celdasFila,valor);
          }
          // simplificar la columna
          {
            let celdasColumna : SudokuCelda[] = this.getColumna(sudoku,j);
            this.simplificarGrupo(celdasColumna,valor);
          }

          // simplificar el cuadrado
          {
            let celdasCuadrado : SudokuCelda[] = this.getCuadrado(sudoku,i,j);
            this.simplificarGrupo(celdasCuadrado,valor);
          }
        }
      }
    }
  }

  simplificarGrupo(celdas: SudokuCelda[], valor: number) {
    for(var i=0;i!=celdas.length;i++) {
      if( celdas[i].posibles.length != 1) {
       celdas[i].posibles = celdas[i].posibles.filter(item => item!=valor);
      }
    }
  }

  getCuadrado(sudoku: Sudoku, fila: number, columna: number): SudokuCelda[] {
    let fila_min = Math.floor(fila/3);
    let fila_max = fila_min+2;
    let columna_min = Math.floor(columna/3);
    let columna_max = columna_min+2;
    let celdas : SudokuCelda[] = [];
    for(var i=0; i!=sudoku.celdas.length; i++) {
      for(var j=0; j!=sudoku.celdas[i].length; j++) {
        if ( i >= fila_min && i <= fila_max && j <= columna_min && j >= columna_max ) {
          celdas.push(sudoku.celdas[i][j]);
        } 
      }
    }
    return celdas;
  }

  getColumna(sudoku: Sudoku, columna: number): SudokuCelda[] {
    let celdas : SudokuCelda[] = [];
    for(var i=0;i!=sudoku.celdas.length;i++) {
      celdas.push(sudoku.celdas[i][columna]);
    }
    return celdas;
  }

  getFila(sudoku: Sudoku, i: number): SudokuCelda[] {
    return sudoku.celdas[i];
  }

  private copiarSudoku(sudokuSrc: Sudoku): Sudoku {

    // copiar el array de celdas
    let celdas: SudokuCelda[][] = [];

    for(var i=0; i!=sudokuSrc.celdas.length; i++) {
      celdas.push([]);
      for(var j=0; j!=sudokuSrc.celdas[i].length; j++) {
        celdas[i].push( this.copiarCelda(sudokuSrc.celdas[i][j]) );
      }
    }

    // contruir el sudoku en función del array de celdas
    let sudoku : Sudoku = { celdas : celdas };
    return sudoku;
  }

  private copiarCelda(sudokuCeldaSrc: SudokuCelda): SudokuCelda {
    let sudokuCelda : SudokuCelda = { posibles : Object.assign([], sudokuCeldaSrc.posibles) };
    return sudokuCelda;
  }

}
