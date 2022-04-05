import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailSourcesComponent } from './movie-detail-sources.component';

describe('MovieDetailSourcesComponent', () => {
  let component: MovieDetailSourcesComponent;
  let fixture: ComponentFixture<MovieDetailSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailSourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
