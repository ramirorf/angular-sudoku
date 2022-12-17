
import { __values } from "tslib";
import { Collection } from "./collection";

export class CollectionArrays<T> implements Collection<T> {
    
    values : T[];

    public constructor(values : T[]) {
        this.values = values;
    }

    size () {
        return this.values.length
    }
    
    get (i: number) {
        return this.values[i];
    }

    set (i: number, value: T) {
        this.values[i] = value;
    }

    getAll () {
        return this.values.toString();
    }

    clone () {
        return  new CollectionArrays<T>(Object.assign([], this.values));
    }

}