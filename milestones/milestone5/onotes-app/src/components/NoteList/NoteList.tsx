import {Note} from "../../model/Note.ts";
import {Link} from "react-router";
import NoteCard from "../NoteCard/NoteCard.tsx";
import {useEffect, useState} from "react";
import {getAllNotes} from "../../service/NoteService.ts";

function NoteList() {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const data = await getAllNotes();
                setNotes(data);
            } catch (error) {
                console.error("Error fetching notes", error);
            }
        };

        fetchNotes();
    }, []);

    return (
        <div className={"note-list container pt-3"}>
            <div className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"}>
                <div className={"col"}>
                    <Link to={"/notes/new"}
                          className={"router-link card shadow-sm align-items-center justify-content-center"}
                          style={{height: '19.5rem'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"
                             fill="#666666">
                            <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/>
                        </svg>
                    </Link>
                </div>
                {notes.map((note) => (
                    <div key={note.id} className={"col"}>
                        <NoteCard note={note}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NoteList;