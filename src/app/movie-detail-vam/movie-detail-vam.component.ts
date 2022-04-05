import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail-vam',
  templateUrl: './movie-detail-vam.component.html',
  styleUrls: ['./movie-detail-vam.component.css'],
})
export class MovieDetailVamComponent implements OnInit {
  @Input() childMovie: any;
  constructor() {}

  ngOnInit(): void {}
}
