import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GenretrainComponent } from './genretrain/genretrain.component';
import { ArtisttrainComponent } from './artisttrain/artisttrain.component';
import { ConcertComponent } from './concert/concert.component';
import { ConcertdetailComponent } from './concertdetail/concertdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'genretrain', component: GenretrainComponent },
  { path: 'artisttrain', component: ArtisttrainComponent },
  { path: 'recommendations', component: ConcertComponent },
  { path: 'concertdetail/:concertId', component: ConcertdetailComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
