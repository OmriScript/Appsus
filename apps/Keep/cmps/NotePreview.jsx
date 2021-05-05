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

        return (
            <div className="note-preview" >

                {
                    note.info.txt && <h1 className="note-preview-header" contentEditable="true" suppressContentEditableWarning={true} onChange={this.handleTitleChange}> {note.info.txt}
                    </h1>
                }
                < section className="note-preview-details" >
                    {< p contentEditable="true" suppressContentEditableWarning={true} > Edit me</p>}
                </section >
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