import { Component, EventEmitter, Input, Output, input, model } from '@angular/core';

@Component({
  selector: 'app-jerarquia-comunicacion-hijo-two-ways',
  imports: [],
  templateUrl: './jerarquia-comunicacion-hijo-two-ways.component.html',
  styleUrl: './jerarquia-comunicacion-hijo-two-ways.component.css'
})
export class JerarquiaComunicacionHijoTwoWaysComponent {

  // modo pre-signals
  @Input() figura : string = "";

  @Output() botonClicado = new EventEmitter<void>();

  notificarAlPadre() {
    this.botonClicado.emit();
  }

  // modo signal
  figuraSignal = input<string>('');
  contadorSignal = model<number>(-1);

  area: string = "desconocida";

  incrementarContadorSignal() {
    this.contadorSignal.update(contador => contador + 1);
  }

}
