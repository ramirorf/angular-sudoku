
export interface Iterator <T> {

    empty: () => boolean;

    next: () => T;

    get: () => T;

}