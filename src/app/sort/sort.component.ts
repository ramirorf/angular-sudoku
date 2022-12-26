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

  readonly SIZE = 500;
  readonly MAX_VALUE = 10_000;

  sortResults : SortResult[];
  values : Collection<number>;
  valuesString : string;

  constructor(private sortCollectionService : SortCollectionService) { 

    // generar un array (y con él una collección) con números aleatorios de tamaño SIZE y con valor máximo MAX_VALUE
    let valuesArray : number[] = Array.from({length: this.SIZE}, () => Math.floor(Math.random() *this.MAX_VALUE));
    this.values = new CollectionArrays<number>(valuesArray);
    this.valuesString = this.values.getAll();

    // lista de rutinas de ordenación 
    type SortRutine = {
      name : string,
      method: (collection : Collection<number>) => Collection<number>
    };

    let sortRutines : SortRutine[] = [
      {name : "bubble", method : sortCollectionService.bubble},
      {name : "bubbleImproved", method : sortCollectionService.bubbleImproved},
      {name : "selection", method : sortCollectionService.selection},
      {name : "insertion", method : sortCollectionService.insertion},
      {name : "mergeSort", method : sortCollectionService.mergeSort},
      {name : "quickSort", method : SortCollectionService.quickSort}
    ];

    // ejecutar las ordenaciones y tomar tiempos
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

  static sort( sortMethod : (collection : Collection<number>) => Collection<number>, values : Collection<number>, description: string) {
    const inicio : number = performance.now();
    const valuesSorted = sortMethod(values);
    const fin : number = performance.now();
    const tiempo = Math.round((fin-inicio) * 100) / 100;

    return new SortResult(description, valuesSorted.getAll(), tiempo);
  }

}
