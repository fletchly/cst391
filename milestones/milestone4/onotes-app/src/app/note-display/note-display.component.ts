import {Component, ElementRef, inject, ViewChild, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {NoteService} from '../service/note.service';
import {Note} from '../model/note.model';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {marked} from 'marked';

@Component({
  selector: 'app-note-display',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    NgIf,
  ],
  templateUrl: './note-display.component.html',
  styleUrl: './note-display.component.css'
})
export class NoteDisplayComponent implements AfterViewInit {
  @ViewChild('content', {static: false}) textarea!: ElementRef<HTMLTextAreaElement>;

  route: ActivatedRoute = inject(ActivatedRoute);
  noteService: NoteService = inject(NoteService);

  noteId: string | null = this.route.snapshot.paramMap.get('id');
  note: Note = {id: '', title: '', content: '', created: '', updated: ''};
  formattedCreated: Date | null = null;
  formattedUpdated: Date | null = null;

  noteForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl(''),
  });

  editing: boolean = false;
  edited: boolean = false;

  constructor(private router: Router) {
    this.noteService.getNoteById(this.noteId, (note: Note) => {
      this.note = note;
      this.formatDates();

      this.noteForm.setValue({
        title: note.title,
        content: note.content,
      });
    });
  }

  ngAfterViewInit(): void {
    // Wait for the DOM to be ready, then resize
    setTimeout(() => this.autoGrow(), 0);
  }

  handleSubmit() {
    if (this.note && this.noteForm.valid) {
      this.note.title = this.noteForm.value.title?.toString() || '';
      this.note.content = this.noteForm.value.content?.toString() || '';

      // Update the note and refresh only after the update completes
      this.noteService.updateNote(this.note, () => {
        // Directly update the last saved date after successful update
        this.note.updated = new Date().toISOString();
        this.formatDates();
        this.edited = false;
      });
    }
  }


  autoGrow() {
    if (this.textarea) {
      const textarea = this.textarea.nativeElement;
      textarea.style.height = 'auto'; // Reset height first
      textarea.style.height = textarea.scrollHeight + 'px'; // Adjust height to fit content
    }
  }

  private formatDates(): void {
    if (this.note) {
      this.formattedCreated = new Date(this.note.created);
      this.formattedUpdated = new Date(this.note.updated);
    }
  }

  handleDelete() {
    this.noteService.deleteNote(this.noteId, () => {});
    this.router.navigate(['/']);
  }

  edit() {
    this.editing = true;
    setTimeout(() => this.autoGrow(), 0); // Ensure resizing after DOM update
  }

  preview() {
    this.editing = false;
  }

  protected readonly marked = marked;

  markEdited() {
    this.edited = true;
  }
}
