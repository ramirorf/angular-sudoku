import { Coche } from "./coche";
import { CreadorVehiculo } from "./creadorVehiculo";
import { Vehiculo } from "./vehiculo";

export class CreadorCoche implements CreadorVehiculo {
    
    number : number = 0;

    public crear() {
        console.log("creaando coche "+this.number);
        return new Coche(""+this.number++);
    }
    
} 