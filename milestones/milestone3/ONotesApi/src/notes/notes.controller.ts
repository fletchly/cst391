import {RequestHandler, Request, Response} from "express";
import * as NotesDao from './notes.dao'
import {OkPacket} from "mysql";

// Read notes
export const readNotes: RequestHandler = async (req: Request, res: Response) => {
    try {
        let notes;
        let noteId = req.params.id as string;

        if (!noteId) {
            notes = await NotesDao.readNotes();
        } else {
            notes = await NotesDao.readNotesById(noteId);
        }
        res.status(200).json(
            notes
        );
    } catch (error) {
        res.status(500).json({
            message: "Error fetching notes",
            error: error,
        })
    }
}

// Create note
export const createNote: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await NotesDao.createNote(req.body);
        const noteUuid = await NotesDao.getLastInsertUuid();
        // TODO: fix method so last insert ID is returned
        res.status(200).json(
            {
                okPacket: okPacket,
                insertUuid: noteUuid,
            }
        );
    } catch (error)
    {
        res.status(500).json({
            message: "Error creating note",
            error: error,
        })
    }
}

// Update note
export const updateNote: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await NotesDao.updateNote(req.body);
        const noteUuid = await NotesDao.getLastInsertUuid();
        // TODO: fix method so last insert ID is returned
        res.status(200).json(
            {
                okPacket: okPacket,
                insertUuid: noteUuid,
            }
        );
    } catch (error)
    {
        res.status(500).json({
            message: "Error updating note",
            error: error,
        })
    }
}

// Delete note
export const deleteNote: RequestHandler = async (req: Request, res: Response) => {
    try {
        let noteId = req.params.id as string;
        if (noteId) {
            const response = await NotesDao.deleteNote(noteId);
            res.status(200).json(
                response
            )
        } else {
            throw new Error("ID expected when deleting note");
        }
    } catch (error) {
        res.status(500).json({
            message: "Error deleting note",
            error: error,
        })
    }
}

// Search notes
export const searchNotes: RequestHandler = async (req: Request, res: Response) => {
    try {
        let searchTerm = req.params.searchTerm as string;
        if (searchTerm) {
            const notes = await NotesDao.searchNotes(searchTerm);
            res.status(200).json(
                notes
            )
        } else {
            throw new Error("Search term expected when searching notes");
        }
    } catch (error) {
        res.status(500).json({
            message: "Error searching notes",
            error: error,
        })
    }
}