import { useState, useEffect } from "react";
import Note from "./components/Note";
import axios from "axios";
import noteService from "./service/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  // fetch the data from json server using axios and to render asyncly with useEffect
  useEffect(() => {
    noteService.getAll().then((notesData) => {
      setNotes(notesData);
    });
  }, []);

  const addNote = (e) => {
    e.preventDefault();

    const newNoteObj = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    noteService.create(newNoteObj).then((returnedNote) => {
      console.log(returnedNote);
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);

    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((n) => (n.id === id ? returnedNote : n)));
      })
      .catch((error) => {
        console.log(error);
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <label htmlFor="new-note">New Note:</label>
        <input
          placeholder="enter a note"
          name="new-note"
          type="text"
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
