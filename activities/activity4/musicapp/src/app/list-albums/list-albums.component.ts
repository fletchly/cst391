import {Component, Input, OnInit} from '@angular/core';
import {MusicServiceService} from '../service/music-service.service';
import {Artist} from '../models/artists.model';
import {Album} from '../models/albums.model';

@Component({
  selector: 'app-list-albums',
  standalone: false,
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})
export class ListAlbumsComponent implements OnInit {
  @Input() artist: Artist | undefined;
  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit(): void {
    this.albums = this.service.getAlbumsOfArtist(this.artist!.artist);
  }

  public onSelectAlbum(album: Album): void {
    this.selectedAlbum = album;
  }
}
