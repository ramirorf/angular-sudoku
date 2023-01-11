import { Motocicleta } from "./motocicleta";
import { CreadorVehiculo } from "./creadorVehiculo";
import { Vehiculo } from "./vehiculo";

export class CreadorMotocicleta implements CreadorVehiculo {
    
    number : number = 0;

    public crear() {
        console.log("creaando coche "+this.number);
        return new Motocicleta(""+this.number++);
    }

} 