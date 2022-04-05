import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail-milestones',
  templateUrl: './movie-detail-milestones.component.html',
  styleUrls: ['./movie-detail-milestones.component.css'],
})
export class MovieDetailMilestonesComponent implements OnInit {
  @Input() childMovie: any;
  constructor() {}

  ngOnInit(): void {}
}
