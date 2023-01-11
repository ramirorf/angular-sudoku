import { Component } from '@angular/core';
import { CreadorCoche } from './modelo/creacional/factoryMethod/creadorCoche';
import { CreadorMotocicleta } from './modelo/creacional/factoryMethod/creadorMotocicleta';
import { CreadorVehiculo } from './modelo/creacional/factoryMethod/creadorVehiculo';
import { Vehiculo } from './modelo/creacional/factoryMethod/vehiculo';

@Component({
  selector: 'app-patrones',
  templateUrl: './patrones.component.html',
  styleUrls: ['./patrones.component.css']
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
