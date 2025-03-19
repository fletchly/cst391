import { Routes } from '@angular/router';
import {NoteListComponent} from './note-list/note-list.component';
import {NoteDisplayComponent} from './note-display/note-display.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: NoteListComponent
  },
  {
    path: 'note/:id',
    title: 'Note',
    component: NoteDisplayComponent
  },
];
