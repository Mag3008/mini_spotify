import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
/*import { AppRoutingModule } from './app.routing';*/
import { SpotifyService } from 'src/app/modules/spotify.service';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistesComponent } from './artistes/artistes.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    ArtistesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
