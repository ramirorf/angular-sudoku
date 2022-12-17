
export class SortResult {
    private descripcion: string;
    private values: string;
    private time: number;

    constructor(    
        descripcion: string,
        values: string,
        time: number,
    ) {
        this.descripcion = descripcion;
        this.values = values;
        this.time = time;
    }

    public getDescription () {
        return this.descripcion;
    }

    public getValues () {
        return this.values;
    }

    public getTime () {
        return this.time;
    }
}