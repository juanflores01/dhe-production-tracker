import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';
import { Vam } from './vam';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let movies = [
      {
        id: 1,
        studio: 'Orion',
        name: 'Robocop',
        territory: 'EN-US',
        streetdate: 'October 2022',
        status: 'In Progress',
        vamid: 1,
        vam: [
          {
            vamid: 1,
            id: 1,
            name: 'RoboVam',
            language: 'xxxx',
            source: 'bonus-reel.prores',
            titlecard: 'xxxx',
            legalcard: 'xxxx',
            deliverable: 'xxxx',
            proxy: 'xxxx',
            itt: 'xxxx',
            thumbnail: 'xxxx',
            status: 'xxxx',
          },
          {
            vamid: 2,
            id: 2,
            name: 'RoboVam - Director Commentary',
            language: 'English',
            source: 'feature-director-commentary.prores',
            titlecard: 'No',
            legalcard: 'No',
            deliverable: 'Pending',
            proxy: 'xxxx',
            itt: 'ES-LA',
            thumbnail: 'Yes',
            status: 'xxxx',
          },
          {
            vamid: 3,
            id: 3,
            name: 'Deleted Scenes',
            language: 'English',
            source: 'deleted-scenes-reel-a.mov',
            titlecard: 'No',
            legalcard: 'No',
            deliverable: 'deleted-scenes.mov',
            proxy: 'deleted-scenes.proxy',
            itt: 'deleted-scenes-reel-a.itt-LA',
            thumbnail: 'Yes',
            status: 'xxxx',
          },
          {
            vamid: 4,
            id: 4,
            name: 'Picture of Peter Weller',
            language: '',
            source: 'peter-weller.png',
            titlecard: '',
            legalcard: '',
            deliverable: 'peter-weller.png',
            proxy: '',
            itt: '',
            thumbnail: '',
            status: 'Complete',
          },
        ],
      },
      {
        id: 2,
        studio: 'MGM',
        name: 'James Bond',
        territory: 'RUS',
        streetdate: 'August 2022',
        status: 'In Progress',
        vamid: 2,
        vam: [
          {
            vamid: 1,
            id: 1,
            name: 'James Vam',
            language: 'xxxx',
            source: 'bonus-reel.prores',
            titlecard: 'xxxx',
            legalcard: 'xxxx',
            deliverable: 'xxxx',
            proxy: 'xxxx',
            itt: 'xxxx',
            thumbnail: 'xxxx',
            status: 'xxxx',
          },
        ],
      },
      {
        id: 3,
        studio: 'Warner Bros.',
        name: 'Batman',
        territory: 'BRA',
        streetdate: 'January 2022',
        status: 'Complete',
        vamid: 3,
        vam: [
          {
            vamid: 1,
            id: 1,
            name: 'BatVam',
            language: 'xxxx',
            source: 'bonus-reel.prores',
            titlecard: 'xxxx',
            legalcard: 'xxxx',
            deliverable: 'xxxx',
            proxy: 'xxxx',
            itt: 'xxxx',
            thumbnail: 'xxxx',
            status: 'xxxx',
          },
        ],
      },
      {
        id: 4,
        studio: 'Orion',
        name: 'Conan',
        territory: 'EN-UK',
        streetdate: 'February 2022',
        status: 'Pending',
        vamid: 4,
        vam: [
          {
            vamid: 1,
            id: 1,
            name: 'ConoVam',
            language: 'xxxx',
            source: 'bonus-reel.prores',
            titlecard: 'xxxx',
            legalcard: 'xxxx',
            deliverable: 'xxxx',
            proxy: 'xxxx',
            itt: 'xxxx',
            thumbnail: 'xxxx',
            status: 'xxxx',
          },
        ],
      },
      {
        id: 5,
        studio: 'Universal Studios',
        name: 'Back to The Future',
        territory: 'EN-US',
        streetdate: 'February 2022',
        status: 'Complete',
        vamid: 5,
        vam: [
          {
            vamid: 1,
            id: 1,
            name: 'Back to the Vam',
            language: 'xxxx',
            source: 'bonus-reel.prores',
            titlecard: 'xxxx',
            legalcard: 'xxxx',
            deliverable: 'xxxx',
            proxy: 'xxxx',
            itt: 'xxxx',
            thumbnail: 'xxxx',
            status: 'xxxx',
          },
        ],
      },
    ];

    return { movies };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(movies: Movie[]): number {
    return movies.length > 0
      ? Math.max(...movies.map((movie) => movie.id)) + 1
      : 11;
  }
  constructor() {}
}
