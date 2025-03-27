import {ChangeEvent, FormEvent, useCallback, useEffect, useState} from "react";
import {createNote, deleteNote, getNote, updateNote} from "../../service/NoteService.ts";
import {Link, useNavigate, useParams} from "react-router";
import {MarkdownService} from "../../service/MarkdownService.ts";
import "./NoteDisplay.css"

function NoteDisplay(props: {modify: boolean}) {
    const [note, setNote] = useState({id: "", title: "", content: "", updated: "", created: ""});
    const [formattedUpdated, setFormattedUpdated] = useState<Date>(new Date())
    const [saved, setSaved] = useState(true);
    const [preview, setPreview] = useState(false);
    const {noteId} = useParams();
    const navigate = useNavigate();


    const fetchNote = useCallback(async () => {
        try {
            const data = await getNote(noteId!.toString());
            setNote(data);
            setFormattedUpdated(new Date(note.updated));
        } catch (error) {
            console.error("Error fetching note", error);
        }
    }, [note.updated, noteId])

    useEffect(() => {
        if (props.modify)
        {
            fetchNote();
            autoGrow();
        }
    }, [fetchNote, props.modify]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (props.modify) {
            updateNote(note).then(fetchNote);
            setSaved(true);
        }
        else {
            createNote(note).then(() => navigate("/"));
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setNote({
            ...note,
            [name]: value
        });
        autoGrow();
        setSaved(false);
    }

    function handleDelete() {
        deleteNote(noteId!).then(() => navigate("/"))
    }

    function autoGrow() {
        const textarea = document.getElementById("noteContent") as HTMLTextAreaElement;
        if (textarea) {
            textarea.style.height = 'auto'; // Reset height
            textarea.style.height = textarea.scrollHeight + 'px'; // Adjust to content height
        }
    }

    function handleEditView() {
        setPreview(false);
        setTimeout(autoGrow, 0);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <nav className={"note-menu position-fixed shadow-sm navbar navbar-expand-lg bg-body"}>
                    <div className={"container-fluid"}>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className={"btn-group m-1"}>
                                <Link to={"/"} className={"btn btn-outline-dark"}>
                                    <i className={"bx bx-arrow-back"}></i>
                                </Link>
                                <button className={"btn btn-outline-dark"} type={"submit"}>
                                    <i className={"bx bx-save"}></i>
                                </button>
                                {
                                    props.modify &&
                                    (<button className={"btn btn-outline-dark"} type={"button"} data-bs-toggle={"modal"}
                                             data-bs-target={"#deleteModal"}>
                                        <i className={"bx bx-trash"}></i>
                                    </button>)
                                }
                            </div>
                            <input placeholder={"Title"}
                                   className={"m-1 note-title text-dark border border-dark rounded-2"}
                                   onChange={handleChange} type={"text"}
                                   name={"title"} value={note.title}/>
                            <div className={"btn-group m-1"}>
                                <button className={"btn btn-outline-dark" + (preview ? " active" : "")} type={"button"}
                                        onClick={() => setPreview(true)}>
                                    <i className={"bx bx-show-alt"}></i>
                                </button>
                                <button className={"btn btn-outline-dark" + (preview ? "" : " active")} type={"button"}
                                        onClick={handleEditView}>
                                    <i className={"bx bx-pencil"}></i>
                                </button>
                            </div>
                            {props.modify && (<div
                                className={"m-1 text-secondary last-saved"}>Last
                                saved {formattedUpdated.toLocaleString()}{saved ? "" : "*"}</div>)}
                        </div>
                    </div>
                </nav>
                <div className={"note-body p-3"}>
                    {preview ?
                        <div>
                            <div dangerouslySetInnerHTML={{__html: MarkdownService.parseMd(note.content)}}/>
                        </div>
                        :
                        <div>
                            <textarea placeholder={"Write here..."} onLoad={autoGrow} id={"noteContent"}
                                      className={"note-content font-monospace"} onChange={handleChange} name={"content"}
                                      value={note.content}/>
                        </div>
                    }
                </div>
            </form>

            <div className={"modal fade"} id={"deleteModal"} tabIndex={-1} aria-labelledby={"deleteModalLabel"}
                 aria-hidden={"true"}>
                <div className={"modal-dialog"}>
                    <div className={"modal-content"}>
                        <div className={"modal-header"}>
                            <h1 className={"modal-title fs-5"} id={"deleteModalLabel"}>Delete note</h1>
                            <button type={"button"} className={"btn-close"} data-bs-dismiss={"modal"}
                                    aria-label={"Close"}></button>
                        </div>
                        <div className={"modal-body"}>
                            <p>Are you sure you want to delete this note? This action cannot be undone.</p>
                        </div>
                        <div className={"modal-footer"}>
                            <button type={"button"} className={"btn btn-outline-dark"}
                                    data-bs-dismiss={"modal"}>Cancel
                            </button>
                            <button type={"button"} className={"btn btn-outline-danger"} data-bs-dismiss={"modal"}
                                    onClick={handleDelete}>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteDisplay;