import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NoteService} from '../service/note.service';
import {Note} from '../model/note.model';
import {NoteCardComponent} from '../note-card/note-card.component';

@Component({
  selector: 'app-note-list',
  imports: [
    RouterLink,
    NoteCardComponent
  ],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {
  noteService: NoteService = inject(NoteService);
  notes: Note[] = [];

  constructor() {
    this.noteService.getNotes((notes: Note[]) => {
      this.notes = notes;
    });
  }
}
