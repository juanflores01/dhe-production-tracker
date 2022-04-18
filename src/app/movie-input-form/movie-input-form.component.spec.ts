import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInputFormComponent } from './movie-input-form.component';

describe('MovieInputFormComponent', () => {
  let component: MovieInputFormComponent;
  let fixture: ComponentFixture<MovieInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
