import {Component, Input} from '@angular/core';
import {Note} from '../model/note.model';
import {RouterLink} from '@angular/router';
import {marked} from 'marked';

@Component({
  selector: 'app-note-card',
  imports: [
    RouterLink
  ],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
  @Input() note: Note = {id: '', title: '', content: '', created: '', updated: ''};
  protected readonly marked = marked;
}
