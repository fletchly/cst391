import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MusicServiceService {
  private host = "http://localhost:5001";

  constructor(private http: HttpClient) { }

  public getArtists(callback: (artists: Artist[]) => void): void {
    this.http.get<Artist[]>(this.host + "/artists")
      .subscribe((artists: Artist[]) => {
        callback(artists);
      });
  }

  public getAlbums(callback: (albums: Album[]) => void): void {
    this.http.get<Album[]>(this.host + "/albums")
      .subscribe((albums: Album[]) => {
        callback(albums);
      });
  }

  public getAlbumsOfArtist(artistName: String, callback: (albums: Album[]) => void): void {
    this.http.get<Album[]>(this.host + "/albums/" + artistName)
      .subscribe((albums: Album[]) => {
        callback(albums);
      });
  }

  public createAlbum(album: Album, callback: () => void): void {
    // Add a new Album to the list of Albums
    this.http.post(this.host + "/albums", album)
      .subscribe((data) => {
        callback();
      });
  }

  public updateAlbum(album: Album, callback: () => void): void {
    // Search for the Album in the list of Albums and replace it in the list
    this.http.put<Album>(this.host + "/albums", album)
      .subscribe((data) => {
        callback();
      });
  }

  public deleteAlbum(id: number, callback: () => void): void {
    // Search for the Album in the list of Albums and delete from the list
    this.http.delete(this.host + "/albums/" + id.toString())
      .subscribe((data) => {
        callback();
      });
  }
}
