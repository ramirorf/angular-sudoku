import { Motocicleta } from "./motocicleta";
import { CreadorVehiculo } from "./creadorVehiculo";
import { Vehiculo } from "./vehiculo";

export class CreadorMotocicleta implements CreadorVehiculo {
    
    public crear() {
        console.log("creaando motocicleta...");
        return new Motocicleta();
    }
    
} 