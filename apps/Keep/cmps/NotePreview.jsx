import { noteService } from '../services/Keep.service.js';

export class NotePreview extends React.Component {
    state = {
        note: this.props.note,
        isEditModeOn: false,
    }

    // This function don't work. As a result <p> contentEditable wont save changes.
    handleChange = ({ target }) => {
        const field = this.state.note.info;
        const value = target.innerText;
        this.setState(prevState => ({
            note: {
                ...prevState.note,
                // [info.title]: value
                [field]: value
            }
        }, () => console.log('state', this.state)))
        // console.log('target', target.innerText);
        // this.props.loadNotes();

    }

    onDeleteNote = () => {
        noteService.deleteNote(this.state.note.id);
        this.props.loadNotes();
    }

    onToggleEditNote = () => {
        this.setState({ isEditModeOn: !this.state.isEditModeOn })
        // noteService.editNote(this.state.note.id);
        // this.props.loadNotes();
    }

    addDefaultImgSrc(ev) {
        ev.target.src = 'https://media.giphy.com/media/hrRJ41JB2zlgZiYcCw/giphy.gif';
    }

    handleInputSumbit = (ev) => {
        // if user hit enter
        if (ev.keyCode == 13) {


            let infoKey = this.getFirstInfoKey();
            // Not a best practice. how to make this better?
            this.setState({
                ...note,
                note: {
                    info: {
                        [infoKey]: ev.target.value,
                    }
                }
            }, () => {
                console.log('state', this.state);
                noteService.updateNote(this.state.note.id, this.state.note);
            })
            this.setState({ isEditModeOn: !this.state.isEditModeOn })
            this.clearFields(ev.target);
            // this.props.loadNotes();

            // noteService.saveNotesToStorage();
        }
    }

    // onEditBtn(ev) {
    //     console.log('onEditBtn func. my ev.target is:', ev.target);
    // }

    clearFields(target) {
        target.value = '';
    }

    getFirstInfoKey = () => {
        let infoFirstKey;
        let infoObj = this.state.note.info
        for (let prop in infoObj) {
            infoFirstKey = prop;
            break;
        }
        return infoFirstKey;
    }

    toggleTodo = () => {
        console.log('toggleTodo from notePreview', this.state.note);

        this.setState(({ note }) => ({
            note: {
                ...note.slice(0, 1),
                {
                ...note.info,
                [note.info]: 
                }
            }
}))


this.setState(({ items }) => ({ items: [...items.slice(0, 1), { ...items[1], name: 'newName', }, ...items.slice(2)] }));





        // this.setState({
        //     ...this.state.note,
        //     note: {
        //         info: {
        //             todos: {
        //                 isDone: !this.state.note.info.todos[0].isDone
        //             }



        //             // {}[0].isDone = !this.state.note.info.todos[0].isDone; 
        //         }
        //     }
        // }, () => {
        //     console.log(this.state.note);
        // })


        // this.setState({
        //     ...note,
        //     note: {
        //         info: {
        //             [infoKey]: ev.target.value,
        //         }
        //     }
        // }, () => {
        //     console.log('state', this.state);
        //     noteService.updateNote(this.state.note.id, this.state.note);
        // })

    }

render() {
    const { note, isEditModeOn } = this.state;
    let infoKey = this.getFirstInfoKey()
    // console.log('note in preview', note);

    return (
        <div className="note-preview" >
            <section className="note-preview-details" >
                {<DynamicNote note={note} addDefaultImgSrc={this.addDefaultImgSrc} toggleTodo={this.toggleTodo} />}
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
                    <button onClick={this.onToggleEditNote}>
                        <i className="note-btn fas fa-edit"></i>
                    </button>
                </div>
                <div className="note-preview-btn-container ">
                    <button onClick={this.onDeleteNote}>
                        <i className="note-btn fas fa-trash"></i>
                    </button>
                </div>
            </section>
            {isEditModeOn &&
                <section className="note-preview note-edit-control-panel flex column justify-end">

                    <input type="text" defaultValue={note.info[infoKey]} onKeyDown={this.handleInputSumbit} />
                    {/* defaultValue={note.info.txt} */}
                    <div className="note-edit-btn-container flex space-between">
                        {/* <button onClick={this.onEditBtn}>Update</button> */}
                        <button onClick={this.onToggleEditNote}>Cancel</button>
                    </div>
                </section>}
        </div >
    )
}
}

function DynamicNote({ note, addDefaultImgSrc, toggleTodo }) {
    switch (note.type) {
        case 'NoteText':
            return <NoteText note={note} />
        case 'NoteImg':
            return <NoteImg note={note} addDefaultImgSrc={addDefaultImgSrc} />
        case 'NoteVideo':
            return <NoteVideo note={note} />

        case 'NoteTodos':
            return <NoteTodo note={note} toggleTodo={toggleTodo} />
        default:
            console.log('switch error');
            return <NoteText note={note} />
    }
}

function NoteText({ note }) {
    return (
        <p>{note.info.txt}</p>
    )
}

function NoteImg({ note, addDefaultImgSrc }) {
    return (
        <img src={note.info.imgUrl} onError={addDefaultImgSrc}></img>
    )
}

function NoteVideo({ note }) {
    return (
        <iframe width="230" height="150" src={note.info.videoUrl} frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube" ></iframe>
    )
}

function NoteTodo({ note, toggleTodo }) {
    return (
        <React.Fragment>
            <h3>{note.info.label}</h3>
            <ul className="note-todo-list clean-list ">

                {console.log('note', note.info.todos[0].txt)}

                {/* <li className={`note-todo-item flex space-between ${note.info.todos[0].isDone && 'done'} `}>
                    {note.info.todos[0].txt}
                    <button onClick={toggleTodo}>
                        <i className="fas fa-times"></i>
                    </button>
                </li> */}

                {note.info.todos.map((todo, idx) => {
                    return (
                        <li key={idx} className={`note-todo-item flex space-between ${todo.isDone && 'done'} `} onClick={toggleTodo}>
                            {todo.txt}
                            <button >
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                    )
                })
                }



                {/* <li className="note-todo-item flex space-between done">
                    No, me todo
                    <button>
                        <i className="fas fa-times"></i>
                    </button>
                </li>
                <li className="note-todo-item flex space-between">
                    What about me?
                    <button>
                        <i className="fas fa-times"></i>
                    </button>
                </li> */}
            </ul>

            <input type="text" name="" placeholder="Enter a todo..." onChange={(e) => {
                console.log(e.target.value);
            }} />

        </React.Fragment>
    )
}