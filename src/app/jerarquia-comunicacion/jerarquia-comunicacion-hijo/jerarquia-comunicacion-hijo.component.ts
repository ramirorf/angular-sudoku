import { Component, EventEmitter, Input, Output, input, model } from '@angular/core';

@Component({
  selector: 'app-jerarquia-comunicacion-hijo',
  templateUrl: './jerarquia-comunicacion-hijo.component.html',
  styleUrl: './jerarquia-comunicacion-hijo.component.css'
})
export class JerarquiaComunicacionHijoComponent {

  // modo pre-signals
  @Input() figura : string = "";

  @Output() botonClicado = new EventEmitter<void>();

  notificarAlPadre() {
    this.botonClicado.emit();
  }

  area: string = "desconocida";

}
