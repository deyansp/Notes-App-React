import React from "react";
import "./NoteEditor.css";

export default function NoteEditor({ activeNote, updateNote }) {
  // empty state if no note has been selected
  if (activeNote === undefined) {
    return (
      <div className="note-editor-empty">
        <p>Select a note to view and edit.</p>
      </div>
    );
  }

  return (
    <div className="note-editor">
      <div className="note-editor-header">
        <h1>Edit Note</h1>
        <p>Auto saves as you type</p>
      </div>
      <div className="note-editor-text">
        <p>Note Text:</p>
        <textarea
          placehodler="Start typing here..."
          value={activeNote.text}
          // sending user input to parent element save method
          onChange={(event) => updateNote(activeNote.id, event.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
