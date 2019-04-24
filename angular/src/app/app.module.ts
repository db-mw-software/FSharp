import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtisttrainComponent } from './artisttrain/artisttrain.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatSelectModule, MatCardModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { GenretrainComponent } from './genretrain/genretrain.component';
import { ConcertComponent } from './concert/concert.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtisttrainComponent,
    LoginComponent,
    GenretrainComponent,
    ConcertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
