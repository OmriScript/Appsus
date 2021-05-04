import { CreateNote } from '../cmps/CreateNote.jsx'
import { NoteList } from '../cmps/NoteList.jsx'
export function KeepApp() {
  return (
    <section className="note-app container">
      <CreateNote />
      <NoteList />
    </section>
  )
}