import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-jerarquia-comunicacion-hijo',
  imports: [],
  templateUrl: './jerarquia-comunicacion-hijo.component.html',
  styleUrl: './jerarquia-comunicacion-hijo.component.css'
})
export class JerarquiaComunicacionHijoComponent {

  @Input() figura : string = "";

  @Output() botonClicado = new EventEmitter<void>();

  area: string = "desconocida";

  notificarAlPadre() {
    this.botonClicado.emit();
  }

}
