export const notesQueries = {
    readNotes: `SELECT BIN_TO_UUID(id) AS id, title, content, created, updated FROM onotes.notes;`,
    readNotesById: `SELECT BIN_TO_UUID(id) AS id, title, content, created, updated FROM onotes.notes WHERE id = ?;`,
    createNote: `INSERT into onotes.notes (title, content, created, updated) values(?,?,?,?);`,
    updateNote: `UPDATE onotes.notes SET title = ?, content = ?, created = ?, updated = ? WHERE id = ?;`,
    deleteNote: `DELETE FROM onotes.notes WHERE id = ?;`,
}