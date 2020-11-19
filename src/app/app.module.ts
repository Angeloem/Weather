import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {pages} from './index';
import {HttpClientModule} from '@angular/common/http';
import { StatsTileComponent } from './components/stats-tile/stats-tile.component';
import { LinkTileComponent } from './components/link-tile/link-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    StatsTileComponent,
    LinkTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
