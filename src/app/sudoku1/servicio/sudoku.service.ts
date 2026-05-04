import { Injectable } from '@angular/core';
import { Sudoku } from '../modelo/sudoku';
import { SudokuCelda, SUDOKU_ALL_VALUES } from '../modelo/sudoku-celda';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {

  newFromSDK(sdk: string): Sudoku {
    sdk = sdk.split('\n').join('');

    let celdaTable: SudokuCelda[][] = [];
    for (var i = 0; i != 9; i++) {
      let celdaRow: SudokuCelda[] = [];
      for (var j = 0; j != 9; j++) {
        var celdaValues: number[] = (sdk[i * 9 + j] == '.') ? SUDOKU_ALL_VALUES : [+sdk[i * 9 + j]];
        var celda: SudokuCelda = { posibles: celdaValues }
        celdaRow.push(celda);
      }
      celdaTable.push(celdaRow);
    }

    let sudoku: Sudoku = { celdas: celdaTable };
    return sudoku;
  }

  siguiente(sudoku: Sudoku): Sudoku {
    let sudokuNext: Sudoku = this.copiarSudoku(sudoku);
    this.eliminarPosiblesFijadosEnGrupo(sudokuNext);
    this.fijarUnicoValorPosibleEnGrupo(sudokuNext);
    return sudokuNext;
  }

  eliminarPosiblesFijadosEnGrupo(sudoku: Sudoku): void {
    for (var i = 0; i != sudoku.celdas.length; i++) {
      for (var j = 0; j != sudoku.celdas[i].length; j++) {
        if (sudoku.celdas[i][j].posibles.length == 1) {
          const valor: number = sudoku.celdas[i][j].posibles[0];
          {
            let celdasFila: SudokuCelda[] = this.getFila(sudoku, i);
            this.eliminarValorGrupo(celdasFila, valor);
          }
          {
            let celdasColumna: SudokuCelda[] = this.getColumna(sudoku, j);
            this.eliminarValorGrupo(celdasColumna, valor);
          }
          {
            let celdasCuadrado: SudokuCelda[] = this.getCuadrado(sudoku, i, j);
            this.eliminarValorGrupo(celdasCuadrado, valor);
          }
        }
      }
    }
  }

  fijarUnicoValorPosibleEnGrupo(sudoku: Sudoku): void {
    for (var i = 0; i != sudoku.celdas.length; i++) {
      for (var j = 0; j != sudoku.celdas[i].length; j++) {
        {
          let celdasFila: SudokuCelda[] = this.getFila(sudoku, i);
          this.simplificarGrupo(celdasFila);
        }
        {
          let celdasColumna: SudokuCelda[] = this.getColumna(sudoku, j);
          this.simplificarGrupo(celdasColumna);
        }
        {
          let celdasCuadrado: SudokuCelda[] = this.getCuadrado(sudoku, i, j);
          this.simplificarGrupo(celdasCuadrado);
        }
      }
    }
  }

  eliminarValorGrupo(celdas: SudokuCelda[], valor: number) {
    for (var i = 0; i != celdas.length; i++) {
      if (celdas[i].posibles.length > 1) {
        celdas[i].posibles = celdas[i].posibles.filter(item => item != valor);
      }
    }
  }

  simplificarGrupo(celdas: SudokuCelda[]) {
    SUDOKU_ALL_VALUES.forEach(value => {
      let celdasValue: SudokuCelda[] = [];
      for (var i = 0; i != celdas.length; i++) {
        if (celdas[i].posibles.includes(value)) {
          celdasValue.push(celdas[i]);
        }
      }
      if (celdasValue.length == 1 && celdasValue[0].posibles.length > 1) {
        celdasValue[0].posibles = [value];
      }
    });
  }

  getCuadrado(sudoku: Sudoku, fila: number, columna: number): SudokuCelda[] {
    let fila_min = Math.floor(fila / 3) * 3;
    let fila_max = fila_min + 2;
    let columna_min = Math.floor(columna / 3) * 3;
    let columna_max = columna_min + 2;
    let celdas: SudokuCelda[] = [];
    for (var i = 0; i != sudoku.celdas.length; i++) {
      for (var j = 0; j != sudoku.celdas[i].length; j++) {
        if (i >= fila_min && i <= fila_max && j >= columna_min && j <= columna_max) {
          celdas.push(sudoku.celdas[i][j]);
        }
      }
    }
    return celdas;
  }

  getColumna(sudoku: Sudoku, columna: number): SudokuCelda[] {
    let celdas: SudokuCelda[] = [];
    for (var i = 0; i != sudoku.celdas.length; i++) {
      celdas.push(sudoku.celdas[i][columna]);
    }
    return celdas;
  }

  getFila(sudoku: Sudoku, i: number): SudokuCelda[] {
    return sudoku.celdas[i];
  }

  private copiarSudoku(sudokuSrc: Sudoku): Sudoku {
    let celdas: SudokuCelda[][] = [];
    for (var i = 0; i != sudokuSrc.celdas.length; i++) {
      celdas.push([]);
      for (var j = 0; j != sudokuSrc.celdas[i].length; j++) {
        celdas[i].push(this.copiarCelda(sudokuSrc.celdas[i][j]));
      }
    }
    let sudoku: Sudoku = { celdas: celdas };
    return sudoku;
  }

  private copiarCelda(sudokuCeldaSrc: SudokuCelda): SudokuCelda {
    let sudokuCelda: SudokuCelda = { posibles: Object.assign([], sudokuCeldaSrc.posibles) };
    return sudokuCelda;
  }

}
