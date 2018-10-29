console.log('Starting notes.js');

const fs = require('fs');
const notesDataFileName = 'notes-data.json';

var fetchNotes = (callback) => {
  var notes = [] ;
  
  if ( fs.existsSync(notesDataFileName)) 
  {
      var notesString = fs.readFileSync(notesDataFileName);
      notes = JSON.parse(notesString);        
  }
  return notes ;
}

var saveNotes = (notes) => {
  fs.writeFileSync(notesDataFileName, JSON.stringify(notes));
}

var addNote = (newNote) => {
  var notes = fetchNotes();
  var duplicateNotes = notes.filter((note) => note.title === newNote.title);

  if (duplicateNotes.length === 0) 
  {
    notes.push(newNote);
    saveNotes(notes) ;
    return newNote ;
  }
}

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
