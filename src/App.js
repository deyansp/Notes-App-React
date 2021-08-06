import { useState, useEffect } from "react";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import uuid from "react-uuid";
import "./App.css";

export default function App() {
  // hook for modifying the notes array, set to [] if there's no data in local storage
  const [notes, setNotes] = useState(
    localStorage.savedNotes ? JSON.parse(localStorage.savedNotes) : []
  );

  const [activeNoteId, setActiveNoteId] = useState(null);

  // store data in local storage every time the notes state is changed
  useEffect(() => {
    localStorage.setItem("savedNotes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      // uuid is a library for generating unique IDs
      id: uuid(),
      text: "Empty Note",
      date: new Date().toLocaleString("en-GB")
    };
    // spread operator for updating the notes array
    setNotes([newNote, ...notes]);
    // setting the active note to the newly created one
    setActiveNoteId(newNote.id);
  };

  const updateNote = (id, text) => {
    // making a copy of the notes array in state
    let tempNotes = [...notes];

    // finding the id of the note that needs to be changed
    let noteIndex = tempNotes.findIndex((note) => note.id === id);

    // updating its value in the copy of the state
    tempNotes[noteIndex].text = text;

    // updating state
    setNotes(tempNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNoteId);
  };

  return (
    <div className="App">
      {notes.length > 0 ? (
        <>
          <NoteList
            notes={notes}
            onNewNote={addNote}
            activeNoteId={activeNoteId}
            setActiveNoteId={setActiveNoteId}
          />
          <NoteEditor activeNote={getActiveNote()} updateNote={updateNote} />
        </>
      ) : (
        // empty state
        <div className="empty-state">
          <h2>It's a little empty in here</h2>
          <button onClick={addNote}>Add Note</button>
        </div>
      )}
    </div>
  );
}
