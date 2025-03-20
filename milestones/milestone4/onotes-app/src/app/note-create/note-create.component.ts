import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {NoteService} from '../service/note.service';
import {Note} from '../model/note.model';

@Component({
  selector: 'app-note-create',
    imports: [
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './note-create.component.html',
  styleUrl: './note-create.component.css'
})
export class NoteCreateComponent {
  noteService: NoteService = inject(NoteService);

  note: Note = {
    id: '',
    title: '',
    content: '',
    created: '',
    updated: '',
  }

  noteForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl(''),
  });

  constructor(private router: Router) {}

  handleSubmit() {
    if (this.note && this.noteForm.valid)
    {
      this.note.title = this.noteForm.value.title?.toString() || '';
      this.note.content = this.noteForm.value.content?.toString() || '';
    }

    this.noteService.saveNote(this.note, () => {});
    this.router.navigate(['/'])
  }

  autoGrow(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
