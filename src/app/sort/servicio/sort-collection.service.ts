import { Injectable } from '@angular/core';
import { CollectionArrays } from '../modelo/colectionArray';

import { Collection } from '../modelo/collection';

@Injectable({
    providedIn: 'root'
})
export class SortCollectionService {

    constructor() { }

    bubble<T>(collection: Collection<T>): Collection<T> {
        for (let k = 0; k < collection.size(); k++) {
            for (let i = 0; i < collection.size()-1; i++) {
                if (collection.get(i) > collection.get(i+1)) {
                    let value = collection.get(i);
                    collection.set(i, collection.get(i+1));
                    collection.set(i+1, value);
                }
            }
        }
        return collection;
    }

    bubbleImproved<T>(collection: Collection<T>): Collection<T> {
        let swapCount;
        for (let k = 0; k < collection.size(); k++) {
            swapCount=0;
            for (let i = 0; i < collection.size()-1; i++) {
                if (collection.get(i) > collection.get(i+1)) {
                    let value = collection.get(i);
                    collection.set(i, collection.get(i+1));
                    collection.set(i+1, value);

                    swapCount++;
                }
            }
            if ( swapCount==0) {
                break;
            }
        }
        return collection;
    }

    selection<T>(collection: Collection<T>): Collection<T> {
        for (let i = 0; i < collection.size(); i++) { 
            let min_index = SortCollectionService.getMin(collection, i)
            if (i < min_index) {
                let value = collection.get(i);
                collection.set(i, collection.get(min_index));
                collection.set(min_index, value);{}
            }
        }
        return collection;
    }

    insertion<T>(collection: Collection<T>): Collection<T> {
        let valuesSorted : T[] = [];
        for (let i = 0; i < collection.size(); i++) {
            let value = collection.get(i); 
            let index = getIndexInsertOnOrdered(valuesSorted, value, 0, valuesSorted.length);
            valuesSorted.splice(index, 0, value);
        }
        return new CollectionArrays(valuesSorted);
    }

    mergeSort<T>(collection: Collection<T>): Collection<T> {
        return collection;
    }
 
    quickSort<T>(collection: Collection<T>): Collection<T> {
        return collection;
    }

    // métodos auxiliares

    static getMin<T>(collection: Collection<T>, start_index: number) {
        let min_index = start_index;
        let min_value = collection.get(start_index);

        for (let i = min_index+1; i < collection.size(); i++) {
            let i_value = collection.get(i);
            if (i_value < min_value) {
                min_index = i;
                min_value = i_value;
            }
        }

        return min_index;
    }
}
function getIndexInsertOnOrdered<T>(valuesSorted: T[], value: T, min : number, max : number) : number {
    // si no hay sitio en el array tomar el mínimo 
    if ( min >= max) {
        return min;
    }

    // si está en el punto medio se devuelve la posición
    let med = Math.floor((max+min)/2);
    if( value == valuesSorted[med]) {
        return med;
    }

    // según si es mayor o menor buscar en la parte derecha o en la izquierda
    if (valuesSorted[med] < value ) {
        return getIndexInsertOnOrdered(valuesSorted, value, med+1, max);
    } else {
        return getIndexInsertOnOrdered(valuesSorted, value, min, med);
    }
}

