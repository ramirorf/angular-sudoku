import { Component, EventEmitter, Input, Output, input, model, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-jerarquia-comunicacion-hijo',
    templateUrl: './jerarquia-comunicacion-hijo.component.html',
    styleUrl: './jerarquia-comunicacion-hijo.component.css',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
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
