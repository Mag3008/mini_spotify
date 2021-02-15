import { Component } from '@angular/core';
import {SpotifyService} from "./modules/spotify.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotifyService]
})
export class AppComponent {
  title = 'spotify-express';
}
