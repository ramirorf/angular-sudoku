
import { Sudoku } from './sudoku';

import { SudokuCelda, SUDOKU_ALL_VALUES } from './sudoku-celda';

function newCell() {
  let sudokuCelda : SudokuCelda = { posibles : SUDOKU_ALL_VALUES } ; 
  return sudokuCelda ;
}

export const SUDOKU_MOK1_SDK = 
`2..1.5..3
.54...71.
.1.2.3.8.
6.28.73.4
.........
1.53.98.6
.2.7.1.6.
.81...24.
7..4.2..1`;

export const SUDOKU_MOCK: Sudoku = { celdas : [ 
    
    [newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell()], 
    
    [newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell()], 
    
    [newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell()], 

    [newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell()], 
    
    [newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell()], 
    
    [newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell()], 

    [newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell()], 
    
    [newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell()], 
    
    [newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell(),  newCell()]

  ] };
