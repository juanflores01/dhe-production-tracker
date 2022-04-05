import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailVamComponent } from './movie-detail-vam.component';

describe('MovieDetailVamComponent', () => {
  let component: MovieDetailVamComponent;
  let fixture: ComponentFixture<MovieDetailVamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailVamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailVamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
