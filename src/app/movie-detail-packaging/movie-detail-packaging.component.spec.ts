import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailPackagingComponent } from './movie-detail-packaging.component';

describe('MovieDetailPackagingComponent', () => {
  let component: MovieDetailPackagingComponent;
  let fixture: ComponentFixture<MovieDetailPackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailPackagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailPackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
