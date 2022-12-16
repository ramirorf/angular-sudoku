import { Injectable } from '@angular/core';

import { Collection } from '../modelo/collection';

@Injectable({
  providedIn: 'root'
})
export class SortCollectionService {

  constructor() { }

  selection <T>  ( collection : Collection<T> ) : void {
      for (let i=0; i< collection.size()-1; i++) {
          let min_index = this.getMin(collection, i+1)
          if ( i < min_index ) {
              let value = collection.get(i);
              collection.set(i,collection.get(min_index));
              collection.set(min_index,value);
          }
      }
  }

  // métodos auxiliares

  getMin <T> (collection : Collection<T>, start_index : number) {
      let min_index = start_index;
      let min_value = collection.get(start_index);

      for(let i=min_index; i < collection.size(); i++) {
          if(collection.get(i) < min_value) {
              min_index = i;
              min_value =  collection.get(i);
          }
      }

      return min_index;
  }
}
