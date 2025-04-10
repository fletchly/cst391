import { NoteCard } from "../note-card/NoteCard.tsx";
import { useLoaderData } from "react-router-dom";
import { Note } from "../../model/Note.ts";

export function NoteList() {
  const { notes } = useLoaderData();

  return (
    <>
      <div
        className={
          "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 md:p-5 p-1 w-full min-w-0"
        }
      >
        {notes.map((note: Note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </>
  );
}
