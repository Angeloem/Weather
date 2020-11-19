import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {pages} from './index';
import {HttpClientModule} from '@angular/common/http';
import { StatsTileComponent } from './components/stats-tile/stats-tile.component';
import { LinkTileComponent } from './components/link-tile/link-tile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherBodyComponent } from './pages/weather-body/weather-body.component';

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    StatsTileComponent,
    LinkTileComponent,
    WeatherBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
