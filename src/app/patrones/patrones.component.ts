import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { CreadorCoche } from './modelo/creacional/factoryMethod/creadorCoche';
import { CreadorMotocicleta } from './modelo/creacional/factoryMethod/creadorMotocicleta';
import { CreadorVehiculo } from './modelo/creacional/factoryMethod/creadorVehiculo';
import { Vehiculo } from './modelo/creacional/factoryMethod/vehiculo';

@Component({
    selector: 'app-patrones',
    templateUrl: './patrones.component.html',
    styleUrl: './patrones.component.css',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatExpansionModule, MatTableModule]
})
export class PatronesComponent {

  private creadorCoche : CreadorVehiculo;
  private creadorMotocicleta : CreadorVehiculo;
  listaFactoryMethod: Vehiculo[];
  displayedColumns: string[] = ['nombre'];

  public constructor() {
    // inicializar creación 
    this.creadorCoche = new CreadorCoche();
    this.creadorMotocicleta = new CreadorMotocicleta();    
    this.listaFactoryMethod = [];

    // añadir vehiculos
    this.listaFactoryMethod.push(this.creadorCoche.crear());
    this.listaFactoryMethod.push(this.creadorCoche.crear());
    this.listaFactoryMethod.push(this.creadorMotocicleta.crear());
  }


}
