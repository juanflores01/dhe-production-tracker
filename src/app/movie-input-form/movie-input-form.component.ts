import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-input-form',
  templateUrl: './movie-input-form.component.html',
  styleUrls: ['./movie-input-form.component.css'],
})
export class MovieInputFormComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.movieService.addMovie({ name } as Movie).subscribe((movie) => {
      this.movies.push(movie);
    });
  }
}
