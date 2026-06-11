import { Component, OnInit, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { SUDOKU_MOCK, SUDOKU_MOK1_SDK } from './modelo/mock-sudoku';
import { Sudoku } from './modelo/sudoku';
import { SudokuService } from './servicio/sudoku.service';

@Component({
    selector: 'app-sudoku1',
    templateUrl: './sudoku1.component.html',
    styleUrl: './sudoku1.component.css',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: []
})

export class Sudoku1Component implements OnInit {

  sudokuArray = signal<Sudoku[]>([]);
  paso = signal(0);
  sudoku = computed(() => this.sudokuArray()[this.paso()]);

  constructor(private sudokuService: SudokuService) { }

  ngOnInit(): void {
    const initial = this.sudokuService.newFromSDK(SUDOKU_MOK1_SDK);
    this.sudokuArray.set([initial]);
  }

  onAnteriorPaso(): void {
    const pasoActual = this.paso();
    if (pasoActual > 0) {
      this.paso.set(pasoActual - 1);
    }
  }

  onSiguientePaso(): void {
    const pasoActual = this.paso();
    const array = this.sudokuArray();
    const siguiente = pasoActual + 1;
    if (siguiente < array.length) {
      this.paso.set(siguiente);
    } else {
      const siguienteSudoku = this.sudokuService.siguiente(array[array.length - 1]);
      this.sudokuArray.set([...array, siguienteSudoku]);
      this.paso.set(siguiente);
    }
  }

}
