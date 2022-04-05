import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Vam } from '../vam';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;

  // currentItem = 'This is from the Parent class';
  currentMovie = {};

  // currentMovie2: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTitle();
  }

  getTitle(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.currentMovie = this.movieService
      .getTitle(id)
      .subscribe((movie) => (this.movie = movie));
  }

  goBack(): void {
    this.location.back();
  }
}
