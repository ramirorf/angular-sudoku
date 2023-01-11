import { Vehiculo } from "./vehiculo";

export class Motocicleta implements Vehiculo {

    private nombre_ : string;

    public constructor( nombre_ : string) {
        this.nombre_ = nombre_;
    }

    public nombre() : string {
        return "Motocicleta -> " + this.nombre_;
    }
    
} 