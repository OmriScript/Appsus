import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/storage-service.js';

export const noteService = {
  query,
  createNote,
  deleteNote,
  updateNote,
  handleImgSrcError,
  saveNotesToStorage,
};

const KEY = 'notes';
let gNotes;

_createNotes();

function query() {
  return Promise.resolve(gNotes);
}

function addNote(noteToAdd) {
  gNotes.unshift(noteToAdd);
  saveNotesToStorage();
  return Promise.resolve(noteToAdd);
}

function deleteNote(noteId) {
  let noteIdx = gNotes.findIndex((note) => note.id === noteId);
  gNotes.splice(noteIdx, 1);
  saveNotesToStorage();
  return Promise.resolve();
}

function updateNote(noteId, note) {
  let noteIdx = gNotes.findIndex((note) => note.id === noteId);

  if (noteIdx === -1) {
    console.log('Error. Cant find noteIdx in updateNote');
    return;
  }
  gNotes[noteIdx] = note;
  saveNotesToStorage();
  return Promise.resolve();
}

function changeVideoLinkEmbed(linkStr) {
  let embedLink = linkStr.replace('watch?v=', 'embed/');
  return embedLink;
}

function handleImgSrcError(image) {
  let defaultImg = 'https://media.giphy.com/media/hrRJ41JB2zlgZiYcCw/giphy.gif';
  image.src = defaultImg;
}

function createNote(inputVal, noteType) {
  if (!inputVal) return;
  let note = {
    id: utilService.makeId(),
    type: noteType,
    isPinned: false,
    style: {
      backgroundColor: '#c988ff',
    },
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
        videoUrl: changeVideoLinkEmbed(inputVal),
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
          txt: 'Edit Me!',
        },
        style: {
          backgroundColor: '#b1ffaa',
        },
      },
      {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
          imgUrl: 'https://media.giphy.com/media/hrRJ41JB2zlgZiYcCw/giphy.gif',
        },
        style: {
          backgroundColor: '#68fff0',
        },
      },
      {
        id: utilService.makeId(),
        type: 'NoteImg',
        isPinned: false,
        info: {
          imgUrl: 'https://media.giphy.com/media/2ilegKh8fMdJAVqbG2/giphy.gif',
        },
        style: {
          backgroundColor: '#75acff',
        },
      },
      {
        id: utilService.makeId(),
        type: 'NoteVideo',
        isPinned: false,
        info: {
          videoUrl: 'https://www.youtube.com/embed/fB8TyLTD7EE',
        },
        style: {
          backgroundColor: '#c988ff',
        },
      },

      {
        id: utilService.makeId(),
        type: 'NoteTodos',
        isPinned: false,
        info: {
          label: 'How was it:',
          todos: [
            { txt: 'Eat', isDone: false },
            { txt: 'Sleep', isDone: false },
            { txt: 'Code', isDone: true },
            { txt: 'Repeat', isDone: true },
          ],
        },
        style: {
          backgroundColor: '#ff8882',
        },
      },
    ];
  }
  gNotes = notes;
  saveNotesToStorage;
}

function saveNotesToStorage() {
  storageService.saveToStorage(KEY, gNotes);
}
