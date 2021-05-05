import { noteService } from '../services/Keep.service.js';

export class NoteInput extends React.Component {

    state = {
        noteType: this.props.noteType
    }

    componentDidUpdate() {
        console.log('NoteInput', this.state);
    }

    handleInputSumbit = (ev) => {
        // if user hit enter
        if (ev.keyCode == 13) {
            this.setState({ noteType: ev.target.value }, () => {
                console.log('1');
            })
            noteService.createNote(ev.target.value)
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
            <div className="note-input-container">
                <input type="text" placeholder="What's on your mind " onKeyDown={this.handleInputSumbit} />
            </div>

            // <div className="note-input-container">
            //     { <DynamicNoteInput noteType={noteType} handleInputSumbit={this.handleInputSumbit} />}
            // </div>

        )
    }
}


// export function DynamicNoteInput(noteType, handleInputSumbit) {
//     console.log(noteType, 'in switch');
//     let inputType = noteType.noteType
//     switch (inputType) {
//         case 'noteText':
//             return <NoteText noteType="txt" placeholder="new Text" handleInputSumbit={handleInputSumbit} />;
//         case 'text':
//             return 'image';
//         case 'url':
//             return 'video';
//         case '2':
//             return 2;
//         default:
//             return 'switch errorr'
//     }


//     function NoteText({ noteType, placeholder, handleInputSumbit }) {
//         return (
//             <input type={noteType} placeholder={placeholder} onKeyDown={() => handleInputSumbit} />
//         )
//     }

// }





{/* <input type={noteType} placeholder={placeholder} onKeyDown={this.handleInputSumbit} /> */ }



// {
//     <DynamicNoteInput type={props.inputType} onclick={() => {
//         console.log('Got click');
//     }} />
// }





