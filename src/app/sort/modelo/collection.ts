
export interface Collection <T> {

    get: (i: number) => T;

    set: (i: number, value : T) => void;

    size: () => number;

    getAll: () => string;

}