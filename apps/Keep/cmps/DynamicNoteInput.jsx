export function DynamicNoteInput({ noteType, handleInputSumbit }) {
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