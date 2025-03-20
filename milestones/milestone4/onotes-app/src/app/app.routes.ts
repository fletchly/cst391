import { Routes } from '@angular/router';
import {NoteListComponent} from './note-list/note-list.component';
import {NoteDisplayComponent} from './note-display/note-display.component';
import {AboutComponent} from './about/about.component';
import {NoteCreateComponent} from './note-create/note-create.component';
import {NoteSearchResultsComponent} from './note-search-results/note-search-results.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: NoteListComponent
  },
  {
    path: 'note/new',
    title: 'New Note',
    component: NoteCreateComponent
  },
  {
    path: 'note/:id',
    title: 'Note',
    component: NoteDisplayComponent
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent
  },
  {
    path: 'search/:searchTerm',
    title: 'Search Results',
    component: NoteSearchResultsComponent
  },
];
