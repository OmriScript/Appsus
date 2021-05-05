import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/storage-service.js';

export const noteService = {
  query,
  createNote,
  deleteNote,
};

const KEY = 'notes';
let gNotes;

_createNotes();

function query() {
  return Promise.resolve(gNotes);
}

function addNote(noteToAdd) {
  gNotes.unshift(noteToAdd);
  _saveNotesToStorage();
  return Promise.resolve(noteToAdd);
}

function deleteNote(noteId) {
  let noteIdx = gNotes.findIndex((note) => note.id === noteId);
  gNotes.splice(noteIdx, 1);
  _saveNotesToStorage();
  console.log('gNotes', gNotes);
  return Promise.resolve();
}

function createNote(input) {
  let note = {
    id: utilService.makeId(),
    type: 'NoteText',
    isPinned: false,
    info: {
      txt: input,
    },
  };
  addNote(note);
  console.log('new note', note);
  //   return note;
}

function _createNotes() {
  let notes = storageService.loadFromStorage(KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: utilService.makeId(),
        type: 'NoteText',
        isPinned: true,
        info: {
          txt: 'No breaks till tomorrow!',
        },
      },
      {
        id: utilService.makeId(),
        type: 'NoteImg',
        info: {
          url: 'http://some-img/me',
          title: 'Me playing Mi',
        },
        style: {
          backgroundColor: '#00d',
        },
      },
      {
        id: utilService.makeId(),
        type: 'NoteTodos',
        info: {
          label: 'How was it:',
          todos: [
            { txt: 'Do that', doneAt: null },
            { txt: 'Do this', doneAt: 187111111 },
          ],
        },
      },
    ];
  }
  gNotes = notes;
  _saveNotesToStorage;
}

function _saveNotesToStorage() {
  storageService.saveToStorage(KEY, gNotes);
}
