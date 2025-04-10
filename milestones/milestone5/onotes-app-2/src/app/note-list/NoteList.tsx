import { NoteCard } from "../note-card/NoteCard.tsx";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Note } from "../../model/Note.ts";

export function NoteList() {
  const { notes, search } = useLoaderData();
  const params = useParams();

  return (
    <>
      {search && (
        <div className={"px-2 pt-2 text-lg"}>
          Search results for "{params.keyword}"
        </div>
      )}
      <div
        className={
          "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 md:p-5 p-1 w-full min-w-0"
        }
      >
        {!search && (
          <Link to={`note/new`}>
            <div
              className={
                "p-5 flex items-center justify-center text-neutral-400 text-5xl h-80 border border-neutral-300 rounded-md hover:shadow-md hover:bg-neutral-200 transition-all w-full"
              }
            >
              <i className="bx bx-plus"></i>
            </div>
          </Link>
        )}

        {notes.map((note: Note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </>
  );
}
