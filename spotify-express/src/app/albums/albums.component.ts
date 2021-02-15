import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../modules/spotify.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { Artiste } from '../artiste';
import { Album } from '../album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [SpotifyService]
})
export class AlbumsComponent implements OnInit {
  id: string;
  album: Album[];
  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params
      .pipe(map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAuth()
          .subscribe(res => {
            this._spotifyService.getAlbums(id, res.access_token)
              .subscribe(album => {
                console.log(album)
                this.album = album;
              });
          });
      }));
  }

}
