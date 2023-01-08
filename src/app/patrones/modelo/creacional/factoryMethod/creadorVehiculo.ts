import { Vehiculo } from "./vehiculo";

export interface CreadorVehiculo {

    crear: () => Vehiculo;

}