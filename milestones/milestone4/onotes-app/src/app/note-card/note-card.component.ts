import {Component, Input} from '@angular/core';
import {Note} from '../model/note.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-note-card',
  imports: [
    RouterLink
  ],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
  @Input() note: Note | undefined;
}
