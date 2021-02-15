import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';//URLSearchParams
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
/*import {headers} from '@angular/common';*/
import { HttpClientModule } from '@angular/common/http';
/*import { Observable } from 'rxjs/Observable';*/
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable(/*{
  providedIn: 'root'
}*/)

export class SpotifyService {
  private artistesURL: string;
  private albumsURL : string;

  constructor(private _http: HttpClient) {

    }
  getAuth = () => {

    let headers = new Headers();
    headers.append('Authorization', 'Basic ');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'client_credentials');
    let body = params.toString();

    // @ts-ignore
    return this._http.post('https://accounts.spotify.com/api/token', body, {responseType: "arraybuffer", headers: headers })
      .map(res => res.json());

  }
  /*on récupères les artistes*/
  getArtist(id: string, authToken: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + authToken);

    this.artistesURL = 'https://api.spotify.com/v1/artists/' + id;

    // @ts-ignore
    return this._http.get(this.artistesURL, {responseType: "arraybuffer", headers: headers })
      .pipe(map(res => res.json()));
  }

  /*récupérer les albums*/
  getAlbums(id: number, authToken: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + authToken);

    this.albumsURL = 'https://api.spotify.com/v1/artists/' + id + '/albums?market=US&album_type=single';

    // @ts-ignore
    return this._http.get(this.albumsURL, {responseType: "arraybuffer", headers: headers })
      .pipe(map(res => res.json()));
  }
}
