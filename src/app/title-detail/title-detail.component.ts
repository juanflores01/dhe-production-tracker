import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Title } from '../title';
import { TitleService } from '../title.service';
import { Vam } from '../vam';

@Component({
  selector: 'app-title-detail',
  templateUrl: './title-detail.component.html',
  styleUrls: ['./title-detail.component.css'],
})
export class TitleDetailComponent implements OnInit {
  title: Title | undefined;
  vam: Vam | undefined;

  constructor(
    private route: ActivatedRoute,
    private titleService: TitleService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTitle();
  }

  getTitle(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.titleService.getTitle(id).subscribe((title) => (this.title = title));
  }

  getTitleVam(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    // do i create a vamService?
    this.titleService.getTitleVam(id).subscribe((vam) => (this.vam = vam));
  }

  goBack(): void {
    this.location.back();
  }
}
