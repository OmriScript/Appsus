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

function createNote(inputVal, noteType) {
  console.log(inputVal, noteType);
  let note = {
    id: utilService.makeId(),
    type: noteType,
    isPinned: false,
  };

  switch (noteType) {
    case 'NoteText':
      note.info = {
        txt: inputVal,
      };
      break;
    case 'NoteImg':
      note.info = {
        imgUrl: inputVal,
      };
      break;
    case 'NoteVideo':
      note.info = {
        videoUrl: inputVal,
      };
      break;
    case 'NoteTodos':
      note.info = {
        label: inputVal,
        todos: [],
      };
      break;

    default:
      return 'switch error';
  }

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
