

export function NotePreview({ note }) {

    console.log('note', note);
    return (
        <div className="note-preview" >
            <h1 className="note-preview-header" contentEditable="true" suppressContentEditableWarning={true}>Header</h1>
            <section className="note-preview-details">
                {<p contentEditable="true" suppressContentEditableWarning={true}>{note.id}</p>}
            </section>
            <section className="note-preview-control-panel flex justify-center align-center">
                <div className="note-btn-container ">
                    <button>
                        <i className="note-btn fas fa-thumbtack"></i>
                    </button>
                </div>
                <div className="note-btn-container ">
                    <button>
                        <i className="note-btn far fa-comment"></i>
                    </button>
                </div>
                <div className="note-btn-container ">
                    <button>
                        <i className="note-btn fas fa-edit"></i>
                    </button>
                </div>
                <div className="note-btn-container ">
                    <button>
                        <i className="note-btn fas fa-trash"></i>
                    </button>
                </div>
            </section>
        </div>
    )
}