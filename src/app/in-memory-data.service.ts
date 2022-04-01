import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Title } from './title';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let titles = [
      {
        id: 1,
        studio: 'Orion',
        title: 'Robochola IN MEMORY',
        territory: 'EN-US',
        streetdate: 'October 2022',
        status: 'In Progress',
      },
      {
        id: 2,
        studio: 'MGM',
        title: 'James Bond',
        territory: 'RUS',
        streetdate: 'August 2022',
        status: 'In Progress',
      },
      {
        id: 3,
        studio: 'Warner Bros.',
        title: 'Batman',
        territory: 'BRA',
        streetdate: 'January 2022',
        status: 'Complete',
      },
      {
        id: 4,
        studio: 'Orion',
        title: 'Conan',
        territory: 'EN-UK',
        streetdate: 'February 2022',
        status: 'Pending',
      },
      {
        id: 5,
        studio: 'Universal Studios',
        title: 'Back to The Future',
        territory: 'EN-US',
        streetdate: 'February 2022',
        status: 'Complete',
      },
    ];
    let vam = [
      {
        id: 1,
        name: 'xxxx',
        language: 'xxxx',
        titlecard: 'xxxx',
        legalcard: 'xxxx',
        deliverable: 'xxxx',
        proxy: 'xxxx',
        itt: 'xxxx',
        thumbnail: 'xxxx',
        status: 'xxxx',
      },
    ];
    return { titles };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(titles: Title[]): number {
    return titles.length > 0
      ? Math.max(...titles.map((title) => title.id)) + 1
      : 11;
  }
  constructor() {}
}
