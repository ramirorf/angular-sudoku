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

}
