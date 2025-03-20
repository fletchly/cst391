import { OkPacket } from "mysql";
import {Note} from "./notes.model";
import {execute} from "../services/mysql.connector";
import {notesQueries} from "./notes.queries";

// Read all notes
export const readNotes = async () => {
    return execute<Note[]>(notesQueries.readNotes, []);
}

// Read notes by ID
export const readNotesById = async (id: string) => {
    return execute<Note>(notesQueries.readNotesById, [id]);
}

// Create note
export const createNote = async (note: Note) => {
    return execute<OkPacket>(notesQueries.createNote, [note.title, note.content]);
}

// Update note
export const updateNote = async (note: Note) => {
    return execute<OkPacket>(notesQueries.updateNote, [note.title, note.content, note.id]);
}

// Delete note
export const deleteNote = async (id: string) => {
    return execute<OkPacket>(notesQueries.deleteNote, [id]);
}

export const searchNotes = async (searchTerm: string) => {
    return execute<Note[]>(notesQueries.searchNotes, ["%" + searchTerm + "%", "%" + searchTerm + "%"]);
}

// Get last insert UUID
export const getLastInsertUuid = async () => {
    return execute<string>(notesQueries.getLastInsertUuid, []);
}