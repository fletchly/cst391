import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NoteService} from '../service/note.service';
import {Note} from '../model/note.model';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-note-display',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './note-display.component.html',
  styleUrl: './note-display.component.css'
})
export class NoteDisplayComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  noteService: NoteService = inject(NoteService);

  note: Note | null = null;
  formattedCreated: Date | null = null;
  formattedUpdated: Date | null = null;

  noteForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl(''),
  });

  constructor() {
    this.noteService.getNoteById(this.route.snapshot.paramMap.get('id'), (note: Note) => {
      this.note = note;
      this.formattedCreated = new Date(note.created);
      this.formattedUpdated = new Date(note.updated);

      this.noteForm.setValue({
        title: note.title,
        content: note.content,
      });
    });

  }

  handleSubmit() {
    if (this.note && this.noteForm.valid)
    {
      this.note.title = this.noteForm.value.title?.toString() || '';
      this.note.content = this.noteForm.value.content?.toString() || '';
    }

    this.noteService.updateNote(this.note, () => {});
  }

  autoGrow(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
