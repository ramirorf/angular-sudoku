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
    return sudokuNext;
  }

  copiarSudoku(sudokuSrc: Sudoku): Sudoku {

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

  copiarCelda(sudokuCeldaSrc: SudokuCelda): SudokuCelda {
    let sudokuCelda : SudokuCelda = { posibles : Object.assign([], sudokuCeldaSrc.posibles) };
    return sudokuCelda;
  }

}