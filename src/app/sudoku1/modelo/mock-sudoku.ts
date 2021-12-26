
import { Sudoku } from './sudoku';
import { SudokuCelda, SUDOKU_CELL_ALL_VALUES } from './sudoku-celda';


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
