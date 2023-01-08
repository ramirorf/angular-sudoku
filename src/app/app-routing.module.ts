import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FractalesComponent } from './fractales/fractales.component';
import { JuegoVidaComponent } from './juego-vida/juego-vida.component';
import { NasaApodComponent } from './nasa-apod/nasa-apod.component';
import { PatronesComponent } from './patrones/patrones.component';
import { SortComponent } from './sort/sort.component';
import { Sudoku1Component } from './sudoku1/sudoku1.component';

const routes: Routes = [
  { path: 'sudoku1', component: Sudoku1Component },
  { path: 'nasa-apod', component: NasaApodComponent },
  { path: 'juego-vida', component: JuegoVidaComponent },
  { path: 'sort', component: SortComponent },
  { path: 'fractales', component: FractalesComponent },
  { path: 'patrones', component: PatronesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
