import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { TitleListComponent } from './title-list/title-list.component';
import { TitleDetailComponent } from './title-detail/title-detail.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'title-list', component: TitleListComponent },
  { path: 'title-detail', component: TitleDetailComponent },
  { path: 'title-detail/:id', component: TitleDetailComponent },
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
