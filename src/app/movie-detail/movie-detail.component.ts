import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Vam } from '../vam';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;
  // vam: Vam | undefined;

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
    this.movieService.getTitle(id).subscribe((movie) => (this.movie = movie));

    // this.getTitleVam();
  }

  // getTitleVam(): void {
  //   const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  //   // do i create a vamService?
  //   this.movieService.getTitleVam(id).subscribe((vam) => (this.vam = vam));
  // }

  goBack(): void {
    this.location.back();
  }
}
