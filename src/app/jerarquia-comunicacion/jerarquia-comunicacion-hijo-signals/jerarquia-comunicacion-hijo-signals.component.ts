import { Component, EventEmitter, Input, Output, input, model } from '@angular/core';

@Component({
  selector: 'app-jerarquia-comunicacion-hijo-signals',
  imports: [],
  templateUrl: './jerarquia-comunicacion-hijo-signals.component.html',
  styleUrl: './jerarquia-comunicacion-hijo-signals.component.css'
})
export class JerarquiaComunicacionHijoSignalsComponent {

  // modo signal
  figuraSignal = input<string>('');

  area: string = "desconocida";
}
