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

  readonly SIZE = 20;
  readonly MAX_VALUE = 1000;

  sortResults : SortResult[];
  values : Collection<number>;
  valuesString : string;

  constructor(private sortCollectionService : SortCollectionService) { 

    let valuesArray : number[] = Array.from({length: this.SIZE}, () => Math.floor(Math.random() *this.MAX_VALUE));

    this.values = new CollectionArrays<number>(Object.assign([], valuesArray));
    this.valuesString = this.values.getAll();

    type SortRutine = {
      name : string,
      method: (collection : Collection<number>) => void
    };

    let sortRutines : SortRutine[] = [
      {name : "bubble", method : sortCollectionService.bubble},
      {name : "selection", method : sortCollectionService.selection},
    ];

    this.sortResults = [];
    sortRutines.forEach( sortRutine => {
      this.sortResults.push(SortComponent.sort( 
        sortRutine.method , 
        this.values.clone() , 
        sortRutine.name));
    })
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
