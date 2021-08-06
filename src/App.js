import { useState } from "react";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import uuid from "react-uuid";
import "./styles.css";

export default function App() {
  // hook for modifying the notes array
  const [notes, setNotes] = useState([]);

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

  const saveNote = () => {};

  const setActiveNote = () => {};

  return (
    <div className="App">
      <NoteList notes={notes} onNewNote={addNote} />
      <NoteEditor />
    </div>
  );
}
