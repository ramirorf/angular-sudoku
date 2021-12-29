import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sudoku1Component } from './sudoku1/sudoku1.component';

const routes: Routes = [
  { path: 'sudoku1', component: Sudoku1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
