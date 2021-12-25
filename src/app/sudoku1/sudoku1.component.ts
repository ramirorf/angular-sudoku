import { Component, OnInit } from '@angular/core';

import { Sudoku } from './modelo/Sudoku';

@Component({
  selector: 'app-sudoku1',
  templateUrl: './sudoku1.component.html',
  styleUrls: ['./sudoku1.component.css']
})

export class Sudoku1Component implements OnInit {

  sudoku : Sudoku = { filas : [ 
    
    [1, 2, 3, 4, 5, 6, 7, 8, 9] , 
    
    [1, 2, 3, 4, 5, 6, 7, 8, 9] , 
    
    [1, 2, 3, 4, 5, 6, 7, 8, 9] , 

    [1, 2, 3, 4, 5, 6, 7, 8, 9] , 
    
    [1, 2, 3, 4, 5, 6, 7, 8, 9] , 
    
    [1, 2, 3, 4, 5, 6, 7, 8, 9] , 

    [1, 2, 3, 4, 5, 6, 7, 8, 9] , 
    
    [1, 2, 3, 4, 5, 6, 7, 8, 9] , 
    
    [1, 2, 3, 4, 5, 6, 7, 8, 9] 

  ] };

  constructor() { }

  ngOnInit(): void {
  }




}
