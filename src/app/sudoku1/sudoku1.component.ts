import { Component, OnInit } from '@angular/core';

import { SUDOKU_MOCK } from './modelo/mock-sudoku';

import { Sudoku } from './modelo/sudoku';

@Component({
  selector: 'app-sudoku1',
  templateUrl: './sudoku1.component.html',
  styleUrls: ['./sudoku1.component.css']
})

export class Sudoku1Component implements OnInit {

  sudoku : Sudoku = SUDOKU_MOCK;

  constructor() { }

  ngOnInit(): void {
  }

}
