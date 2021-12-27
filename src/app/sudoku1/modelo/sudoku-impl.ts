import { Sudoku } from "./sudoku";
import { SudokuCelda } from "./sudoku-celda";


export class SudokuImpl implements Sudoku {
    
    celdas: SudokuCelda[][];

    constructor(celdas: SudokuCelda[][]) {
        this.celdas = celdas;
    }

}