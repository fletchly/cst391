import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { MarkdownService } from "../../service/MarkdownService.ts";
import "./NoteDisplay.css";
import {
  createNote,
  deleteNote,
  getNote,
  updateNote,
} from "../../service/NoteService.ts";
import { Modal } from "../modal/Modal.tsx";

export function NoteDisplay() {
  const { noteId } = useParams<{ noteId: string }>();
  const { modify, note_ } = useLoaderData();
  const [note, setNote] = useState(note_);
  const [formattedUpdated, setFormattedUpdated] = useState<Date>(new Date());
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [preview, setPreview] = useState(false);
  const [saved, setSaved] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // Get note from backend
  const fetchNote = useCallback(async () => {
    try {
      const data = await getNote(noteId!);
      setNote(data);
    } catch (error) {
      console.error("Error fetching note", error);
    }
  }, [noteId]);

  // Update form data with note data
  const updateForm = useCallback(() => {
    setFormData({
      title: note.title,
      content: note.content,
    });
    setFormattedUpdated(new Date(note.updated));
  }, [note.content, note.title, note.updated]);

  // Initially update the form
  useEffect(() => {
    if (modify) {
      updateForm();
    }
  }, [modify, updateForm]);

  // Handle note save
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If the note is set to be modified, update the note in the backend
    if (modify) {
      updateNote({
        ...note,
        title: formData.title,
        content: formData.content,
      }).then(fetchNote);
      updateForm();
      setSaved(true);
    } else {
      // If the note is not set to be modified, then create it
      createNote({
        ...note,
        title: formData.title,
        content: formData.content,
      }).then(() => navigate("/"));
    }
  };

  // Handle form changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setSaved(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Toggle between previewing and editing
  const handlePreview = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setPreview(checked);
  };

  const handleDelete = () => {
    deleteNote(noteId!).then(() => {
      setModalOpen(false);
      navigate("/");
    });
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        toggle={setModalOpen}
        action={handleDelete}
        content={{
          title: "Delete note?",
          ok: "Delete",
          cancel: "Cancel",
        }}
      />
      <div className={"sticky top-0 bg-white"}>
        <NoteMenu
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          handlePreview={handlePreview}
          toggleModal={setModalOpen}
          saved={saved}
          modify={modify}
          formattedUpdated={formattedUpdated}
        />
        <hr className="border-gray-200" />
      </div>
      <div className={"px-2"}>
        <NoteBody
          preview={preview}
          content={formData.content}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

// NoteMenu Component
interface NoteMenuProps {
  handleSubmit(e: FormEvent<HTMLFormElement>): void;

  handleChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ): void;

  formData: { title: string; content: string };

  handlePreview(e: ChangeEvent<HTMLInputElement>): void;
  toggleModal(state: boolean): void;

  saved: boolean;
  modify: boolean;
  formattedUpdated: Date;
}

function NoteMenu({
  handleSubmit,
  handleChange,
  formData,
  handlePreview,
  toggleModal,
  saved,
  modify,
  formattedUpdated,
}: NoteMenuProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row flex-wrap sm:space-x-2 sm:space-y-0 space-y-2 space-x-0 items-stretch p-2">
        <div className="flex items-center text-gray-500 px-2 py-1 rounded-md hover:bg-gray-200 transition-colors">
          <Link to={"/"}>
            <i className={"bx bx-arrow-back"}></i>
          </Link>
        </div>
        <input
          className="w-50 border-b-2 border-b-gray-200 text-gray-800 focus:border-b-gray-800 transition-colors truncate outline-none"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <button
          type="submit"
          className="hover:text-gray-800 hover:inset-shadow-sm cursor-pointer text-xl text-gray-500 active:text-white active:bg-gray-800 rounded-md bg-gray-200 px-2 py-1 transition-all"
        >
          <i className="bx bx-save"></i>
        </button>
        {modify && (
          <button
            type="button"
            className="hover:text-gray-800 hover:inset-shadow-sm cursor-pointer text-xl text-gray-500 active:text-white active:bg-gray-800 rounded-md bg-gray-200 px-2 py-1 transition-all"
            onClick={() => toggleModal(true)}
          >
            {" "}
            <i className="bx bx-trash"></i>
          </button>
        )}
        <PreviewToggle handlePreview={handlePreview} />
        {modify && (
          <div className="flex items-center text-gray-500">
            <span>
              Last saved {formattedUpdated.toLocaleString()}
              {saved ? "" : "*"}
            </span>
          </div>
        )}
      </div>
    </form>
  );
}

// NoteBody Component
interface NoteBodyProps {
  preview: boolean;
  content: string;
  handleChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ): void;
}

function NoteBody({ preview, content, handleChange }: NoteBodyProps) {
  return (
    <div className="mt-2">
      {preview ? (
        <div
          dangerouslySetInnerHTML={{
            __html: MarkdownService.parseMd(content),
          }}
        />
      ) : (
        <textarea
          className="block w-full field-sizing-content resize-none outline-none font-mono"
          name="content"
          value={content}
          onChange={handleChange}
          placeholder="Content"
        />
      )}
    </div>
  );
}

// PreviewToggle Component
interface PreviewToggleProps {
  handlePreview(e: ChangeEvent<HTMLInputElement>): void;
}

function PreviewToggle({ handlePreview }: PreviewToggleProps) {
  return (
    <div className="flex items-center">
      <label
        htmlFor="hs-large-switch-with-icons"
        className="relative inline-block w-15 h-8 cursor-pointer"
      >
        <input
          onChange={handlePreview}
          type="checkbox"
          id="hs-large-switch-with-icons"
          className="peer sr-only"
        />
        <span className="absolute inset-shadow-sm inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-gray-800 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
        <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-7 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full"></span>

        <span className="absolute top-1/2 start-1.5 -translate-y-1/2 flex justify-center items-center size-5 text-gray-500 peer-checked:text-white transition-colors duration-200">
          <i className={"bx bx-pencil"}></i>
        </span>

        <span className="absolute top-1/2 end-1.5 -translate-y-1/2 flex justify-center items-center size-5 text-gray-500 peer-checked:text-gray-800 transition-colors duration-200">
          <i className={"bx bx-show-alt"}></i>
        </span>
      </label>
    </div>
  );
}
