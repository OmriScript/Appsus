import { noteService } from '../services/Keep.service.js';

export class NotePreview extends React.Component {
    state = {
        note: this.props.note
    }


    // func needs fixes and updated after input comp is taken care of
    handleTitleChange = ({ target }) => {
        const value = target.value;
        this.setState(prevState => ({
            note: {
                ...prevState.note,
                [info.title]: value
            }
        }))
        console.log('update h1');
    }


    onDeleteNote = () => {

        noteService.deleteNote(this.state.note.id);
        this.props.loadNotes();
        // .then(() => {
        //     console.log('deleted');
        // })
    }

    render() {
        const { note } = this.state;
        console.log('note in preview', note);

        return (
            <div className="note-preview" >
                < section className="note-preview-details" >

                    {note.info.txt && <p contentEditable="true" suppressContentEditableWarning={true}>{note.info.txt}</p>}

                    {note.info.imgUrl && <img src={note.info.imgUrl} onError={noteService.handleImgSrcError(this)}></img>}

                    {note.info.videoUrl && <iframe width="230" height="150" src={note.info.videoUrl} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube" ></iframe>}

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