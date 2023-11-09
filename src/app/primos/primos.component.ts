import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.component.html',
  styleUrls: ['./primos.component.css']
})

export class PrimosComponent {

  primosArray: number[];
  primos: string;

  constructor() {
    this.primos = "";
    this.primosArray = [2];
  }

  numeroChange(event: any) {
    if (event.target.value != null) {
      this.primos = this.calcularPrimos(event.target.value);
    }
  }

  calcularPrimos(number: number): string {
    this.inicializarPrimosArray(this.primosArray, number);
    return this.primosArray.slice(0,number).toString();
  }

  inicializarPrimosArray(primosArray: number[], primoNumber: number) {
    if (primoNumber > 0) {
      while (primosArray.length < primoNumber ) {
        primosArray.push(this.siguientePrimo(primosArray, primosArray[primosArray.length-1]))
      }      
    }
  }

  siguientePrimo(primosArray: number[], primoAnterior: number): number {
    let i=primoAnterior+1;
    for(;!this.esPrimo(primosArray, i);i++) {}
    return i;
 }

 esPrimo(primosArray: number[], primoPosible: number): boolean {
  for(let i=0;i!=primosArray.length;i++) {
    if ( primoPosible % primosArray[i] == 0 ) {
      return false;
    }
  }
  return true;
 } 

}
