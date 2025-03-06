import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MusicServiceService} from '../service/music-service.service';
import {Artist} from '../models/artists.model';

@Component({
  selector: 'app-list-artists',
  standalone: false,
  templateUrl: './list-artists.component.html',
  styleUrl: './list-artists.component.css'
})
export class ListArtistsComponent implements OnInit {
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log("Getting data...");
      this.service.getArtists((artists: Artist[]) => {
        this.artists = artists;
        console.log('this.artists', this.artists);
      });
      this.selectedArtist = null;
    });
  }

  onSelectArtist(artist: Artist): void {
    this.selectedArtist = artist;
  }
}
