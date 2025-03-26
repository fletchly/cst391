import './NoteCard.css'
import {Note} from "../../model/Note.ts";
import {Link} from "react-router";
import {MarkdownService} from "../../service/MarkdownService.ts";

function NoteCard(props: {note: Note}) {
    return (
        <Link className={"router-link card shadow-sm"} to={`/notes/${props.note.id}`}>
            <div className={"fixed-height card-body"}>
                <h5 className={"card-title"}>{props.note.title}</h5>
                <div className={"card-text"} dangerouslySetInnerHTML={{ __html: MarkdownService.parse(props.note.content) }}></div>
            </div>
        </Link>
    )
}

export default NoteCard;