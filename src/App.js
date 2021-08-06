import { useState } from "react";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import "./styles.css";

export default function App() {
  // hook for modifying the notes array
  const [notes, setNotes] = useState([]);

  const addNote = () => {};

  const saveNote = () => {};

  const setActiveNote = () => {};

  return (
    <div className="App">
      <NoteList notes={notes} />
      <NoteEditor />
    </div>
  );
}
