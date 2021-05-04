export function NoteInput(props) {

    function handleInputSumbit(ev) {
        // if user hit enter
        if (ev.keyCode == 13) {
            console.log(ev.target.value);
            // create note in model

            // create note in dom
            clearFields(ev.target)
        }
    }

    function clearFields(target) {
        target.value = '';
    }




    return (
        <div className="note-input-container">
            <input type="text" placeholder="What's on your mind " onKeyDown={handleInputSumbit} />



            {/* <DynamicNoteInput type={props.inputType} onclick={() => {
                console.log('Got click');
            }} /> */}
        </div>
    )
}


const DynamicNoteInput = ({ inputType }) => {
    switch (inputType) {
        case 'text':
            return 'text';
        case 'image':
            return 'image';
        case 'url':
            return 'video';
        case '2':
            return 2;
        default:
            return 'switch error'
    }
}


