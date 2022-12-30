import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sudoku1Component } from './sudoku1/sudoku1.component';
import { NasaApodComponent } from './nasa-apod/nasa-apod.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JuegoVidaComponent } from './juego-vida/juego-vida.component';
import { SortComponent } from './sort/sort.component';
import { FractalesComponent } from './fractales/fractales.component';

@NgModule({
  declarations: [
    AppComponent,
    Sudoku1Component,
    NasaApodComponent,
    JuegoVidaComponent,
    SortComponent,
    FractalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
