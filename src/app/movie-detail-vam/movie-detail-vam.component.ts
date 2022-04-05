import { Component, Input, OnInit } from '@angular/core';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-detail-vam',
  templateUrl: './movie-detail-vam.component.html',
  styleUrls: ['./movie-detail-vam.component.css'],
})
export class MovieDetailVamComponent implements OnInit {
  // @Input() childMovie = '';
  @Input() childMovie = {};
  constructor() {}

  ngOnInit(): void {}
}
