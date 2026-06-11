import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-primos',
    templateUrl: './primos.component.html',
    styleUrl: './primos.component.css',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatFormFieldModule, MatInputModule]
})

export class PrimosComponent {

  primosArray: number[] = [2];
  primos = signal('');
  divisoresString = signal('');

  numeroPrimosChange(event: any) {
    if (event.target.value != null) {
      this.primos.set(this.calcularPrimos(event.target.value));
    }
  }

  numeroDescomponerChange(event: any) {
    if (event.target.value != null) {
      let numero = event.target.value;
      let divisores = this.descomponer(numero);

      let result = '';
      divisores.forEach((value: number, key: number) => {
        if (result == '') {
          result += key + '^' + value;
        } else {
          result += ' + ' + key + '^' + value;
        }
      });
      this.divisoresString.set(' \\( ' + result + ' \\) ');
    }
  }

  descomponer(number: number): Map<number, number> {
    let divisores = new Map<number, number>();
    let currentPrimoCandidato = 0;

    do {
      let primo = this.primosArray[currentPrimoCandidato];
      let contador = 0;
      while (number != 1 && number % primo == 0) {
        number = number / primo;
        contador++;
      }
      if (contador > 0) {
        divisores.set(primo, contador);
      }

      currentPrimoCandidato++;
      this.inicializarPrimosArray(this.primosArray, currentPrimoCandidato + 1);
    } while (number != 1);

    return divisores;
  }

  calcularPrimos(number: number): string {
    this.inicializarPrimosArray(this.primosArray, number);
    return this.primosArray.slice(0, number).toString();
  }

  inicializarPrimosArray(primosArray: number[], primoNumber: number) {
    if (primoNumber > 0) {
      while (primosArray.length < primoNumber) {
        primosArray.push(this.siguientePrimo(primosArray, primosArray[primosArray.length - 1]))
      }
    }
  }

  siguientePrimo(primosArray: number[], primoAnterior: number): number {
    let i = primoAnterior + 1;
    for (; !this.esPrimo(primosArray, i); i++) { }
    return i;
  }

  esPrimo(primosArray: number[], primoPosible: number): boolean {
    for (let i = 0; i != primosArray.length; i++) {
      if (primoPosible % primosArray[i] == 0) {
        return false;
      }
    }
    return true;
  }

}
