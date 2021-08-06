import { useState } from "react";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState();

  return (
    <div className="App">
      <NoteList />
      <NoteEditor />
    </div>
  );
}
