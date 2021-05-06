import { noteService } from '../services/Keep.service.js';

export class NotePreview extends React.Component {
    state = {
        note: this.props.note
    }

    // This function don't work. As a result <p> contentEditable wont save changes.
    handleChange = ({ target }) => {
        const field = this.state.note.info;
        const value = target.innerText;
        this.setState(prevState => ({
            note: {
                ...prevState.note,
                // [info.title]: value
                [field]: value
            }
        }, () => console.log('state', this.state)))
        // console.log('target', target.innerText);
        // this.props.loadNotes();

    }

    onDeleteNote = () => {
        noteService.deleteNote(this.state.note.id);
        this.props.loadNotes();
    }

    addDefaultImgSrc(ev) {
        ev.target.src = 'https://media.giphy.com/media/hrRJ41JB2zlgZiYcCw/giphy.gif';
    }

    render() {
        const { note } = this.state;
        // console.log('note in preview', note);

        return (
            <div className="note-preview" >
                <section className="note-preview-details" >
                    {<DynamicNote note={note} addDefaultImgSrc={this.addDefaultImgSrc} />}
                </section>

                <section className="note-preview-control-panel flex justify-end align-end">
                    <div className="note-preview-btn-container ">
                        <button>
                            <i className="note-btn fas fa-thumbtack"></i>
                        </button>
                    </div>
                    <div className="note-preview-btn-container ">
                        <button>
                            <i className="note-btn fas fa-palette"></i>
                        </button>
                    </div>
                    <div className="note-preview-btn-container ">
                        <button>
                            <i className="note-btn fas fa-edit"></i>
                        </button>
                    </div>
                    <div className="note-preview-btn-container ">
                        <button onClick={this.onDeleteNote}>
                            <i className="note-btn fas fa-trash"></i>
                        </button>
                    </div>
                </section>
            </div >
        )
    }
}


function DynamicNote({ note, addDefaultImgSrc }) {
    switch (note.type) {
        case 'NoteText':
            return <NoteText note={note} />
        case 'NoteImg':
            return <NoteImg note={note} addDefaultImgSrc={addDefaultImgSrc} />

        case 'NoteVideo':
            return <NoteVideo note={note} />

        case 'NoteTodos':
            return <NoteTodo note={note} />
        default:
            console.log('switch error');
            // return <NoteText note={note} />
            break;
    }
}

function NoteText({ note }) {
    return (
        <p contentEditable="true" suppressContentEditableWarning={true}>{note.info.txt}</p>
    )
}

function NoteImg({ note, addDefaultImgSrc }) {
    return (
        <img src={note.info.imgUrl} onError={addDefaultImgSrc}></img>
    )
}

function NoteVideo({ note }) {
    return (
        <iframe width="230" height="150" src={note.info.videoUrl} frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube" ></iframe>
    )
}

function NoteTodo({ note }) {
    return (
        <React.Fragment>
            <h3>{note.info.label}</h3>
            {/* <ul className="note-todo-list clean-list ">
                <li className="note-todo-item flex space-between">
                    I am a todo
                    <button>
                        <i className="fas fa-times"></i>
                    </button>
                </li>
            </ul>

            <input type="text" name="" placeholder="Enter a todo..." onChange={(e) => {
                console.log(e.target.value);
            }} /> */}

        </React.Fragment>
    )
}