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
  divisoresString: string = "";

  constructor() {
    this.primos = "";
    this.primosArray = [2];
  }

  numeroPrimosChange(event: any) {
    if (event.target.value != null) {
      this.primos = this.calcularPrimos(event.target.value);
    }
  }

  numeroDescomponerChange(event: any) {
    if (event.target.value != null) {
      let numero = event.target.value;
      let divisores = this.descomponer(numero);
      
      // convertir los factores en texto
      this.divisoresString = "";
      divisores.forEach((value: number, key: number) => {
        if (this.divisoresString == "") {
          this.divisoresString += key + "^" + value;
        } else {
          this.divisoresString += " + " +key + "^" + value;
        }
      });
      this.divisoresString = " \( " + this.divisoresString + " \) ";
      /*
      let divisores = new Map<number, number>();
      let currentPrimoCandidato = 0;      
      do {
        let primoCandidato =  obtenerSiguentePrimo(currentPrimoCandidato); 
        numero = numero;
        currentPrimoCandidato++; 
      } while(numero % obtenerSiguentePrimo(currentPrimoCandidato) == 0) {
      */

      //this.primos = this.calcularPrimos(event.target.value);
    }
  }

  descomponer ( number : number) : Map<number, number> {
    let divisores = new Map<number, number>();
    let currentPrimoCandidato = 0;      

   do {
    let primo = this.primosArray[currentPrimoCandidato];
    let contador = 0;
    while ( number != 1 && number % primo == 0) {
      number = number / primo;
      contador++;  
    }
    if (contador > 0) {
      divisores.set(primo,contador);       
    }

    currentPrimoCandidato++;
    this.inicializarPrimosArray(this.primosArray, currentPrimoCandidato+1);
   } while( number != 1);

   return divisores;
   /*
    divisores.set(2,2);
    divisores.set(3,2);
    return divisores;
    */
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
