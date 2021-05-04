export function CreateNoteInput(props) {



    return (
        <div className="note-input-container">
            <input type="text" placeholder="What's on your mind " />



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


