import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'sudoku1', pathMatch: 'full' },
  {
    path: 'sudoku1',
    loadComponent: () => import('./sudoku1/sudoku1.component').then(m => m.Sudoku1Component)
  },
  {
    path: 'nasa-apod',
    loadComponent: () => import('./nasa-apod/nasa-apod.component').then(m => m.NasaApodComponent)
  },
  {
    path: 'juego-vida',
    loadComponent: () => import('./juego-vida/juego-vida.component').then(m => m.JuegoVidaComponent)
  },
  {
    path: 'sort',
    loadComponent: () => import('./sort/sort.component').then(m => m.SortComponent)
  },
  {
    path: 'fractales',
    loadComponent: () => import('./fractales/fractales.component').then(m => m.FractalesComponent)
  },
  {
    path: 'patrones',
    loadComponent: () => import('./patrones/patrones.component').then(m => m.PatronesComponent)
  },
  {
    path: 'primos',
    loadComponent: () => import('./primos/primos.component').then(m => m.PrimosComponent)
  },
  {
    path: 'jerarquia-comunicacion',
    loadComponent: () => import('./jerarquia-comunicacion/jerarquia-comunicacion.component').then(m => m.JerarquiaComunicacionComponent)
  }
];
