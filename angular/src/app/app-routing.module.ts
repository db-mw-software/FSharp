import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GenretrainComponent } from './genretrain/genretrain.component';
import { ArtisttrainComponent } from './artisttrain/artisttrain.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'genretrain', component: GenretrainComponent },
  { path: 'artisttrain', component: ArtisttrainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
