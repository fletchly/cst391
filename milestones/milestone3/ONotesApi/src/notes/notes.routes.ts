import { Router } from 'express';
import * as NotesController from './notes.controller'

// Initialize router
const router = Router();

// READ
router.route('/notes').get(NotesController.readNotes); // Read all notes
router.route('/notes/:noteId').get(NotesController.readNotes); // Read note by ID

// CREATE
router.route('/notes').delete(NotesController.createNote);

// UPDATE
router.route('/notes').delete(NotesController.updateNote);

// DELETE
router.route('/notes/:noteId').delete(NotesController.deleteNote);

export default router;