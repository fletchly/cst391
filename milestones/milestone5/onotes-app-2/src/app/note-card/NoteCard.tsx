import { Note } from "../../model/Note.ts";
import { Link } from "react-router-dom";
import { MarkdownService } from "../../service/MarkdownService.ts";

export function NoteCard(props: { note: Note }) {
  return (
    <>
      <Link to={`note/${props.note.id}`}>
        <div
          className={
            "h-80 border border-neutral-300 rounded-md hover:shadow-md hover:bg-neutral-200 transition-all w-full"
          }
        >
          <div className={"p-5"}>
            <div
              className={
                "text-neutral-500 text-2xl font-medium w-full line-clamp-1 overflow-hidden"
              }
            >
              {props.note.title}
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: MarkdownService.parseMd(props.note.content),
              }}
              className={
                "text-neutral-600 text-base line-clamp-10 w-full overflow-hidden"
              }
            ></div>
          </div>
        </div>
      </Link>
    </>
  );
}
