import { useState } from "react";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import uuid from "react-uuid";
import "./styles.css";

export default function App() {
  // hook for modifying the notes array
  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);

  const addNote = () => {
    const newNote = {
      // uuid is a library for generating unique IDs
      id: uuid(),
      text: "Empty Note",
      date: new Date().toLocaleString("en-GB")
    };
    // spread operator
    setNotes([newNote, ...notes]);
  };

  const saveNote = (id, text) => {
    // making a copy of the notes array in state
    let tempNotes = [...notes];

    // finding the id of the note that needs to be changed
    let noteIndex = tempNotes.findIndex((note) => note.id === id);

    // updating its value in the copy of the state
    tempNotes[noteIndex].text = text;

    // updating state
    setNotes([tempNotes]);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNoteId);
  };

  return (
    <div className="App">
      <NoteList
        notes={notes}
        onNewNote={addNote}
        activeNoteId={activeNoteId}
        setActiveNoteId={setActiveNoteId}
      />
      <NoteEditor activeNote={getActiveNote()} saveNote={saveNote} />
    </div>
  );
}
