import { Injectable } from '@angular/core';
import { Note } from '../model/note.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private host = "http://localhost:5001";

  constructor(private http: HttpClient) { }

  public getNotes(callback: (notes: Note[]) => void): void {
    this.http.get<Note[]>(this.host + "/notes")
      .subscribe((notes: Note[]) => {
        callback(notes);
      });
  }

  public getNoteById(id: string | null, callback: (note: Note) => void): void {
    this.http.get<Note[]>(this.host + "/notes/" + id)
      .subscribe((note: Note[]) => {
        callback(note[0]);
      });
  }

  public updateNote(note: Note | null, callback: () => void): void {
    this.http.put<Note>(this.host + "/notes", note)
      .subscribe((data) => {
        callback();
      });
  }
}
