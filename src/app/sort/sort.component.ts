import { Component, OnInit } from '@angular/core';

import { Collection } from './modelo/collection';

import { CollectionArrays } from './modelo/colectionArray';

import { SortCollectionService } from './servicio/sort-collection.service';
import { SortResult } from './modelo/sortResult';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})

export class SortComponent implements OnInit {

  sortResults : SortResult[];
  values : Collection<number>;
  valuesString : string;

  constructor(private sortCollectionService : SortCollectionService) { 
    const SIZE = 10;
    const MAX_VALUE = 100;

    let valuesArray : number[] = Array.from({length: SIZE}, () => Math.floor(Math.random() * MAX_VALUE));

    this.values = new CollectionArrays<number>(Object.assign([], valuesArray));
    this.valuesString = this.values.getAll();

    this.sortResults = [];
    this.sortResults.push( 
      SortComponent.sort( 
          sortCollectionService.bubble , 
          new CollectionArrays<number>(Object.assign([], valuesArray)
      ), 
      "bubble") );
    this.sortResults.push( 
      SortComponent.sort( 
          sortCollectionService.selection , 
          new CollectionArrays<number>(Object.assign([], valuesArray)
      ), 
      "selection") )
  }

  ngOnInit(): void {
  }

  static sort( sortMethod : (collection : Collection<number>) => void, values : Collection<number>, description: string) {
    const inicio : number = performance.now();
    sortMethod(values);
    const fin : number = performance.now();
    const tiempo = Math.round((fin-inicio) * 100) / 100;

    return new SortResult(description, values.getAll(), tiempo);
  }

}
