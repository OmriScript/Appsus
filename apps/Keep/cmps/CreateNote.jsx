import { CreateNoteInput } from './CreateNoteInput.jsx';


export function CreateNote() {

    function handleBtnClick(ev) {
        console.log(ev.target);
    }

    return (
        <div className="note-create flex">
            <CreateNoteInput />
            <div className="note-control-panel flex">
                <div className="note-btn-container ">
                    <button onClick={handleBtnClick}>
                        <i className="note-btn far fa-comment"></i>
                    </button>
                </div>
                <div className="note-btn-container">
                    <button onClick={handleBtnClick}>
                        <i className="note-btn far fa-image"></i>
                    </button>

                </div>
                <div className="note-btn-container">
                    <button onClick={handleBtnClick}>
                        <i className="note-btn fab fa-youtube"></i>
                    </button>
                </div>
                <div className="note-btn-container">
                    <button onClick={handleBtnClick}>
                        <i className="note-btn fas fa-list-ul"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}