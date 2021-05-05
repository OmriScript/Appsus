import { NoteInput } from './NoteInput.jsx';
import { noteService } from '../services/Keep.service.js';


export class CreateNote extends React.Component {
    state = {
        noteType: 'NoteText',
    }

    handleBtnClick(noteType) {
        // console.log(noteType);
        this.setState({ noteType }, () => {
            console.log(this.state);
        })

    }

    handleInputSumbit = (ev) => {
        // if user hit enter
        if (ev.keyCode == 13) {
            console.log('input:', ev.target.value);

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

                {/* <NoteInput loadNotes={this.props.loadNotes} noteType={noteType} /> */}

                <div className="note-input-container">
                    {<DynamicNoteInput noteType={noteType} handleInputSumbit={this.handleInputSumbit} />}
                </div>


                <div className="note-control-panel flex">
                    <div className="note-btn-container ">
                        <button onClick={() => {
                            this.handleBtnClick('NoteText')
                        }}>
                            <i className="note-btn far fa-comment"></i>
                        </button>
                    </div>
                    <div className="note-btn-container">
                        <button onClick={() => {
                            this.handleBtnClick('NoteImg')
                        }}>
                            <i className="note-btn far fa-image"></i>
                        </button>
                    </div>
                    <div className="note-btn-container">
                        <button onClick={() => {
                            this.handleBtnClick('NoteVideo')
                        }}>
                            <i className="note-btn fab fa-youtube"></i>
                        </button>
                    </div>
                    <div className="note-btn-container">
                        <button onClick={() => {
                            this.handleBtnClick('NoteTodos')
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

    switch (noteType) {
        case 'NoteText':
            return <NoteText noteType="txt" placeholder="What's on your mind..." handleInputSumbit={handleInputSumbit} />;
        case 'NoteImg':
            return <NoteImg noteType="img" placeholder="Enter image Url..." handleInputSumbit={handleInputSumbit} />;

        case 'NoteVideo':
            return <NoteVideo noteType="video" placeholder="Enter video Url..." handleInputSumbit={handleInputSumbit} />;

        case 'NoteTodos':
            return <NoteTodo noteType="doto" placeholder="Enter comma separated list..." handleInputSumbit={handleInputSumbit} />;
        default:
            return 'switch error'
    }


    function NoteText({ noteType, placeholder, handleInputSumbit }) {
        return (
            <input type={noteType} placeholder={placeholder} onKeyDown={handleInputSumbit} />
        )
    }

    function NoteImg({ noteType, placeholder, handleInputSumbit }) {
        return (
            <input type={noteType} placeholder={placeholder} onKeyDown={handleInputSumbit} />
        )
    }

    function NoteVideo({ noteType, placeholder, handleInputSumbit }) {
        // console.log('handleInputSumbit', handleInputSumbit);
        return (
            <input type={noteType} placeholder={placeholder} onKeyDown={handleInputSumbit} />
        )
    }

    function NoteTodo({ noteType, placeholder, handleInputSumbit }) {
        return (
            <input type={noteType} placeholder={placeholder} onKeyDown={handleInputSumbit} />
        )
    }
}