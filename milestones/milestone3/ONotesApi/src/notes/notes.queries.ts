export const notesQueries = {
    // Read all notes
    readNotes: `SELECT BIN_TO_UUID(id) AS id, title, content, created, updated FROM onotes.notes;`,

    // Read notes by id
    // The note ID is stored in the DB as a binary(16) type, and converted to and from a UUID when queried
    readNotesById: `SELECT BIN_TO_UUID(id) AS id, title, content, created, updated FROM onotes.notes WHERE id = UUID_TO_BIN(?)`,

    // Create note
    // Upon creation, the note's created and updated values are both set to the current date and time
    createNote: `INSERT into onotes.notes (title, content, created, updated) values(?,?,NOW(),NOW());`,

    // Update note
    // Upon updating, the note's updated value is set to the current date and time
    updateNote: `UPDATE onotes.notes SET title = ?, content = ?, created = ?, updated = NOW() WHERE id = UUID_TO_BIN(?);`,

    // Delete note
    deleteNote: `DELETE FROM onotes.notes WHERE id = UUID_TO_BIN(?);;`,
}