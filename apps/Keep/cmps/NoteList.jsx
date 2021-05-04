import { NotePreview } from './NotePreview.jsx';

export function NoteList({ notes }) {
    return (
        <div className="note-list">
            {notes.map(note => {
                return <NotePreview note={note} key={note.id} />
            })}
        </div>
    )
}