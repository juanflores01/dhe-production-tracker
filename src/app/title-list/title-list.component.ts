import { Component, OnInit } from '@angular/core';

import { Title } from '../title';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css'],
})
export class TitleListComponent implements OnInit {
  titles: Title[] = [];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.getTitles();
  }

  getTitles(): void {
    this.titleService.getTitles().subscribe((titles) => (this.titles = titles));
  }
}
