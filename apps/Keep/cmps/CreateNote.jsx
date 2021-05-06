import { noteService } from '../services/Keep.service.js';

export class CreateNote extends React.Component {
    state = {
        noteType: 'NoteText'
    }

    handleBtnClick(e, noteType) {
        console.log('make me black');
        console.log(e.target.className);
        this.setState({ noteType }, () => {
            console.log('state', this.state);
        })
    }

    handleInputSumbit = (ev) => {
        // if user hit enter
        if (ev.keyCode == 13) {
            // console.log('input:', ev.target.value);

            this.setState({ noteType: 'NoteText' }, () => {
                // console.log(this.state);
            })
            noteService.createNote(ev.target.value, this.state.noteType)
            this.props.loadNotes();
            this.clearFields(ev.target)
        }
    }

    clearFields(target) {
        target.value = '';
    }

    render() {
        const { noteType } = this.state;
        return (
            <div className="note-create flex space-between align-center">

                <div className="note-input-container">
                    {<DynamicNoteInput noteType={noteType} handleInputSumbit={this.handleInputSumbit} />}
                </div>

                <div className="note-control-panel flex">
                    <div className="note-btn-container ">
                        <button className={this.state.noteType === 'NoteText' ? 'active' : 'undefined'} onClick={(e) => {
                            this.handleBtnClick(e, 'NoteText')
                        }}>
                            <i className="note-btn far fa-comment"></i>
                        </button>
                    </div>
                    <div className="note-btn-container">
                        <button className={this.state.noteType === 'NoteImg' ? 'active' : 'undefined'} onClick={(e) => {
                            this.handleBtnClick(e, 'NoteImg')
                        }}>
                            <i className="note-btn far fa-image"></i>
                        </button>
                    </div>
                    <div className="note-btn-container">
                        <button className={this.state.noteType === 'NoteVideo' ? 'active' : 'undefined'} onClick={(e) => {
                            this.handleBtnClick(e, 'NoteVideo')
                        }}>
                            <i className="note-btn fab fa-youtube"></i>
                        </button>
                    </div>
                    <div className="note-btn-container">
                        <button className={this.state.noteType === 'NoteTodos' ? 'active' : 'undefined'} onClick={(e) => {
                            this.handleBtnClick(e, 'NoteTodos')
                        }}>
                            <i className="note-btn fas fa-list-ul"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

function DynamicNoteInput({ noteType, handleInputSumbit }) {
    let plcholder;
    switch (noteType) {
        case 'NoteText':
            plcholder = "What's on your mind..."
            break;
        case 'NoteImg':
            plcholder = "Enter image URL..."
            break;
        case 'NoteVideo':
            plcholder = "Enter video URL..."
            break;
        case 'NoteTodos':
            plcholder = "Enter todo-list title..."
            break;
        default:
            plcholder = 'switch error';
            break;
    }

    return (
        <input name={noteType} placeholder={plcholder} onKeyDown={handleInputSumbit} />
    )
}