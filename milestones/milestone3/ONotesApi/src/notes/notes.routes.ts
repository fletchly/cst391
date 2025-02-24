import { Router } from 'express';
import * as NotesController from './notes.controller'

// Initialize router
const router = Router();

// READ
router.route('/notes').get(NotesController.readNotes); // Read all notes
router.route('/notes/:id').get(NotesController.readNotes); // Read note by ID

// CREATE
router.route('/notes').post(NotesController.createNote);

// UPDATE
router.route('/notes').put(NotesController.updateNote);

// DELETE
router.route('/notes/:id').delete(NotesController.deleteNote);

export default router;