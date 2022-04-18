import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieInputFormComponent } from './movie-input-form/movie-input-form.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-detail', component: MovieDetailComponent },
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'movie-input-form', component: MovieInputFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
