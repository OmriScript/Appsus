import { CreateNote } from '../cmps/CreateNote.jsx';
import { NoteList } from '../cmps/NoteList.jsx';

import { noteService } from '../services/Keep.service.js';
import { Loader } from '../../../cmps/Loader.jsx';

export class KeepApp extends React.Component {

  state = {
    notes: null
  }

  componentDidMount() {
    this.loadNotes();
    // setTimeout(() => {
    //   this.loadNotes()
    // }, 1000)
  }

  loadNotes() {
    noteService.query().then((notes) => {
      this.setState({ notes }, () => {
        console.log('state', this.state);

      });
    })
  }

  render() {
    const { notes } = this.state;
    if (!notes) return <Loader />

    return (
      <section className="note-app container">
        <CreateNote />
        <NoteList />
      </section>
    )
  }
}