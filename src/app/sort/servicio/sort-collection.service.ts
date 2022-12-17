import { Injectable } from '@angular/core';

import { Collection } from '../modelo/collection';

@Injectable({
    providedIn: 'root'
})
export class SortCollectionService {

    constructor() { }

    bubble<T>(collection: Collection<T>): void {
        for (let k = 0; k < collection.size(); k++) {
            for (let i = 0; i < collection.size()-1; i++) {
                if (collection.get(i) > collection.get(i+1)) {
                    let value = collection.get(i);
                    collection.set(i, collection.get(i+1));
                    collection.set(i+1, value);
                }
            }
        }
    }

    bubbleImproved<T>(collection: Collection<T>): void {
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
    }

    selection<T>(collection: Collection<T>): void {
        for (let i = 0; i < collection.size(); i++) { 
            let min_index = SortCollectionService.getMin(collection, i)
            if (i < min_index) {
                let value = collection.get(i);
                collection.set(i, collection.get(min_index));
                collection.set(min_index, value);
            }
        }
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
