import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-note-display',
  imports: [
    RouterLink
  ],
  templateUrl: './note-display.component.html',
  styleUrl: './note-display.component.css'
})
export class NoteDisplayComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  noteId: string | null = null;

  constructor() {
    this.noteId = this.route.snapshot.paramMap.get('id');
  }
}
