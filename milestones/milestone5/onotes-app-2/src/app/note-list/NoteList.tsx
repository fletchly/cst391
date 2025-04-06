import {NoteCard} from "../note-card/NoteCard.tsx";

export function NoteList() {
  return (
    <>
      <div className={"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 md:p-5 p-1 w-full min-w-0"}>
          <NoteCard
              note={{
                  id: "",
                  title: "My note with a veeeeeeeeeeery very long title",
                  content:
                      "This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content ",
                  created: "",
                  updated: "",
              }}
          />
          <NoteCard
              note={{
                  id: "",
                  title: "My note with a very very long title",
                  content:
                      "This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content ",
                  created: "",
                  updated: "",
              }}
          />
          <NoteCard
              note={{
                  id: "",
                  title: "My note with a very very long title",
                  content:
                      "This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content ",
                  created: "",
                  updated: "",
              }}
          />
          <NoteCard
              note={{
                  id: "",
                  title: "My note with a very very long title",
                  content:
                      "This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content ",
                  created: "",
                  updated: "",
              }}
          />
          <NoteCard
              note={{
                  id: "",
                  title: "My note with a very very long title",
                  content:
                      "This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content This is my content ",
                  created: "",
                  updated: "",
              }}
          />
      </div>
    </>
  );
}
