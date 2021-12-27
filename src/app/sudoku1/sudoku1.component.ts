import { Component, OnInit } from '@angular/core';

import { SUDOKU_MOCK, SUDOKU_MOK1_SDK } from './modelo/mock-sudoku';

import { Sudoku } from './modelo/sudoku';
import { SudokuServiceService } from './servicio/sudoku-service.service';

@Component({
  selector: 'app-sudoku1',
  templateUrl: './sudoku1.component.html',
  styleUrls: ['./sudoku1.component.css']
})

export class Sudoku1Component implements OnInit {

  sudoku : Sudoku = SUDOKU_MOCK;

  constructor(private sudokuServiceService : SudokuServiceService) { 
    this.sudoku = this.sudokuServiceService.newFromSDK(SUDOKU_MOK1_SDK);
  }

  ngOnInit(): void {
  }

}
