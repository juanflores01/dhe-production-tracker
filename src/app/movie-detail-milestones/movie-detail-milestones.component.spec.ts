import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailMilestonesComponent } from './movie-detail-milestones.component';

describe('MovieDetailMilestonesComponent', () => {
  let component: MovieDetailMilestonesComponent;
  let fixture: ComponentFixture<MovieDetailMilestonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailMilestonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
