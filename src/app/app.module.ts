import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { MovieDetailVamComponent } from './movie-detail-vam/movie-detail-vam.component';
import { MovieDetailMilestonesComponent } from './movie-detail-milestones/movie-detail-milestones.component';
import { MovieDetailPackagingComponent } from './movie-detail-packaging/movie-detail-packaging.component';
import { MovieDetailSourcesComponent } from './movie-detail-sources/movie-detail-sources.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieDetailVamComponent,
    MovieDetailMilestonesComponent,
    MovieDetailPackagingComponent,
    MovieDetailSourcesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
