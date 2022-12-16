import { Component, OnInit } from '@angular/core';

import { Collection } from './modelo/collection';

import { CollectionArrays } from './modelo/colectionArray';

import { SortCollectionService } from './servicio/sort-collection.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})

export class SortComponent implements OnInit {

  values : Collection<number>;
  valuesString : string;
  valuesSortedString : string;

  constructor(private sortCollectionService : SortCollectionService) { 
    const SIZE = 10;
    const MAX_VALUE = 100;

    let valuesArray : number[] = Array.from({length: SIZE}, () => Math.floor(Math.random() * MAX_VALUE));

    this.values = new CollectionArrays<number>(valuesArray);
    this.valuesString = this.values.getAll();

    sortCollectionService.selection(this.values);
    this.valuesSortedString = this.values.getAll();
  }

  ngOnInit(): void {
  }

}
