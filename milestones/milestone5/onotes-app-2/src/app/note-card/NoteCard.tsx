import { Note } from "../../model/Note.ts";
import { Link } from "react-router-dom";

export function NoteCard(props: { note: Note }) {
  return (
    <>
      <div
        className={
          "h-80 border border-neutral-300 rounded-md hover:shadow-md transition-shadow w-full"
        }
      >
        <Link to={`notes/${props.note.id}`}>
          <div className={"p-5"}>
            <h1 className={"text-neutral-500 text-2xl font-medium w-full line-clamp-1 overflow-hidden"}>
              {props.note.title}
            </h1>
            <div className={"text-base line-clamp-10 w-full overflow-hidden"}>
              {props.note.content}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
