import {Note} from "../../model/Note.ts";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {searchNotes} from "../../service/NoteService.ts";
import NoteCard from "../NoteCard/NoteCard.tsx";

function SearchResults() {
    const [notes, setNotes] = useState<Note[]>([])
    const {keyword} = useParams();

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const data = await searchNotes(keyword ?? "");
                setNotes(data);
            } catch (error) {
                console.error("Error fetching notes", error)
            }
        };

        fetchNotes();
    }, [keyword]);

    return (
        <div className={"note-list container pt-3"}>
            <div className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"}>
                {
                    notes.length == 0 ?
                        <p>No results for "{keyword}"</p>
                        :
                        notes.map((note) => (
                            <div key={note.id} className={"col"}>
                                <NoteCard note={note}/>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default SearchResults