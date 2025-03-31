import { Note } from "../../model/Note.ts";
import { Link } from "react-router-dom";

export function NoteCard(props: { note: Note }) {
  return (
    <>
      <div
        className={
          "h-80 w-64 border border-neutral-300 rounded-md hover:shadow-md transition-shadow"
        }
      >
        <Link to={`notes/${props.note.id}`}>
          <div className={"p-5"}>
            <h1 className={"text-neutral-500 text-2xl font-medium truncate"}>
              {props.note.title}
            </h1>
            <div className={"text-base line-clamp-10"}>
              {props.note.content}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
