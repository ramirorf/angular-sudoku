import { Coche } from "./coche";
import { CreadorVehiculo } from "./creadorVehiculo";
import { Vehiculo } from "./vehiculo";

export class CreadorCoche implements CreadorVehiculo {
    
    public crear() {
        console.log("creaando coche...");
        return new Coche();
    }
    
} 