
import { Sudoku } from './sudoku';
import { SudokuCelda } from './sudoku-celda';

export const SUDOKU_CELL_ALL_VALUES: SudokuCelda = { posibles : [1,2,3,4,5,6,7,8,9] } ; 

function newCell() {
  return Object.assign({}, SUDOKU_CELL_ALL_VALUES);
}

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
  