import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../modules/spotify.service';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Artiste } from '../artiste';
import { Album } from '../album';

@Component({
  selector: 'app-artistes',
  templateUrl: './artistes.component.html',
  styleUrls: ['./artistes.component.css']
})
export class ArtistesComponent implements OnInit {
  id: string;
  artist: Artiste[];
  albums: Album[];

  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params
      .pipe(map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAuth()
          .subscribe(res => {
            this._spotifyService.getArtist(id, res.access_token)
              .subscribe(artist => {
                this.artist = artist;
              });
            this._spotifyService.getAlbums(id, res.access_token)
              .subscribe(albums => {
                this.albums = albums.items;
              });
          });
      }));
  }

}
