import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {NoteService} from '../service/note.service';
import {Note} from '../model/note.model';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-note-display',
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './note-display.component.html',
  styleUrl: './note-display.component.css'
})
export class NoteDisplayComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  noteService: NoteService = inject(NoteService);

  noteId: string | null = this.route.snapshot.paramMap.get('id');
  note: Note | null = null;
  formattedCreated: Date | null = null;
  formattedUpdated: Date | null = null;

  noteForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl(''),
  });

  constructor(private router: Router) {
    this.noteService.getNoteById(this.noteId, (note: Note) => {
      this.note = note;
      this.formatDates();

      this.noteForm.setValue({
        title: note.title,
        content: note.content,
      });

      const textarea = document.getElementById('content') as HTMLTextAreaElement;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    });
  }

  handleSubmit() {
    if (this.note && this.noteForm.valid)
    {
      this.note.title = this.noteForm.value.title?.toString() || '';
      this.note.content = this.noteForm.value.content?.toString() || '';
    }

    this.noteService.updateNote(this.note, () => {});
    this.refreshNote();
  }

  autoGrow(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }


  private refreshNote(): void {
    this.noteService.getNoteById(this.noteId, (note: Note) => {
      this.note = note;
      this.formatDates();
    });
  }

  private formatDates(): void {
    if (this.note) {
      this.formattedCreated = new Date(this.note.created);
      this.formattedUpdated = new Date(this.note.updated);
    }
  }

  handleDelete() {
    this.noteService.deleteNote(this.noteId, () => {});
    this.router.navigate(['/'])
  }
}
