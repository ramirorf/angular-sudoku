import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Collection } from './modelo/collection';
import { CollectionArrays } from './modelo/colectionArray';
import { SortCollectionService } from './servicio/sort-collection.service';
import { SortResult } from './modelo/sortResult';

@Component({
    selector: 'app-sort',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.css'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: []
})

export class SortComponent implements OnInit {

  readonly SIZE = 500;
  readonly MAX_VALUE = 10_000;

  sortResults: SortResult[] = [];
  values!: Collection<number>;
  valuesString: string = '';

  constructor(private sortCollectionService: SortCollectionService) { }

  ngOnInit(): void {
    let valuesArray: number[] = Array.from({ length: this.SIZE }, () => Math.floor(Math.random() * this.MAX_VALUE));
    this.values = new CollectionArrays<number>(valuesArray);
    this.valuesString = this.values.getAll();

    type SortRutine = {
      name: string,
      method: (collection: Collection<number>) => Collection<number>
    };

    let sortRutines: SortRutine[] = [
      { name: "bubble", method: this.sortCollectionService.bubble },
      { name: "bubbleImproved", method: this.sortCollectionService.bubbleImproved },
      { name: "selection", method: this.sortCollectionService.selection },
      { name: "insertion", method: this.sortCollectionService.insertion },
      { name: "mergeSort", method: this.sortCollectionService.mergeSort },
      { name: "quickSort", method: SortCollectionService.quickSort }
    ];

    sortRutines.forEach(sortRutine => {
      this.sortResults.push(SortComponent.sort(
        sortRutine.method,
        this.values.clone(),
        sortRutine.name));
    })
  }

  static sort(sortMethod: (collection: Collection<number>) => Collection<number>, values: Collection<number>, description: string) {
    const inicio: number = performance.now();
    const valuesSorted = sortMethod(values);
    const fin: number = performance.now();
    const tiempo = Math.round((fin - inicio) * 100) / 100;

    return new SortResult(description, valuesSorted.getAll(), tiempo);
  }

}
