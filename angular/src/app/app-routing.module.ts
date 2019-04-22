import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtisttrainComponent } from './artisttrain/artisttrain.component';

const routes: Routes = [
  { path: 'artisttrain', component: ArtisttrainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
