import React from "react";

export default function NoteEditor({ activeNote, updateNote }) {
  return (
    <div className="note-editor">
      <div className="note-editor-header">
        <h2>Edit Note</h2>
      </div>
      <div className="note-editor-text">
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
