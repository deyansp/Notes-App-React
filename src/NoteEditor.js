import React, { useState } from "react";

export default function NoteEditor({ activeNote, saveNote }) {
  const [textInput, setTextInput] = useState(activeNote.text);
  return (
    <div className="note-editor">
      <div className="note-editor-header">
        <h2>Edit Note</h2>
      </div>
      <div className="note-editor-text">
        <textarea
          placehodler="Start typing here..."
          onChange={(event) => setTextInput(event.target.value)}
        >
          {textInput}
        </textarea>
      </div>
      <button onClick={() => saveNote(activeNote.id)}>Save</button>
    </div>
  );
}
