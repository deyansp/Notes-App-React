import React from "react";

export default function NoteEditor(props) {
  return (
    <div className="note-editor">
      <div className="note-editor-header">
        <h2>Edit Note</h2>
      </div>
      <div className="note-editor-text">
        <textarea placehodler="Start typing here..."></textarea>
      </div>
      <button>Save</button>
    </div>
  );
}
