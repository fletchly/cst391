import {Component, inject, OnInit} from '@angular/core';
import {NoteService} from '../service/note.service';
import {ActivatedRoute} from '@angular/router';
import {Note} from '../model/note.model';
import {NoteCardComponent} from '../note-card/note-card.component';

@Component({
  selector: 'app-note-search-results',
  imports: [
    NoteCardComponent,
  ],
  templateUrl: './note-search-results.component.html',
  styleUrl: './note-search-results.component.css'
})
export class NoteSearchResultsComponent {
  noteService: NoteService = inject(NoteService);
  route: ActivatedRoute = inject(ActivatedRoute);

  notes: Note[] = [];
  searchTerm: string | null = this.route.snapshot.paramMap.get('searchTerm');

  constructor() {
    console.log(this.searchTerm);
    this.noteService.searchNotes(this.searchTerm, (notes: Note[]) => {
      this.notes = notes;
      console.log(this.notes);
    });
  }
}
