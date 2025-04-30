import { Component, OnInit } from '@angular/core';

import { SUDOKU_MOCK, SUDOKU_MOK1_SDK } from './modelo/mock-sudoku';

import { Sudoku } from './modelo/sudoku';
import { SudokuServiceService } from './servicio/sudoku-service.service';

@Component({
    selector: 'app-sudoku1',
    templateUrl: './sudoku1.component.html',
    styleUrls: ['./sudoku1.component.css'],
    standalone: false
})

export class Sudoku1Component implements OnInit {

  sudokuArray : Sudoku[] = [];
  paso : number = 0;
  sudoku : Sudoku;

  constructor(private sudokuServiceService : SudokuServiceService) {
    this.sudoku =  this.sudokuServiceService.newFromSDK(SUDOKU_MOK1_SDK);
    this.sudokuArray.push(this.sudoku);
 }

  ngOnInit(): void {
  }

  onAnteriorPaso(): void {
    if (this.paso > 0) {
      this.paso--;
      this.sudoku = this.sudokuArray[this.paso];
    }
  }

  onSiguientePaso(): void {
    this.paso++;
    if (this.paso < this.sudokuArray.length) {
      this.sudoku = this.sudokuArray[this.paso];  
    } else {
      this.sudoku = this.sudokuServiceService.siguiente(this.sudoku);  
      this.sudokuArray.push(this.sudoku);
    }
  }

}
