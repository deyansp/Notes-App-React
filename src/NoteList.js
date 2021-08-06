import React, { useState } from "react";

// destructuring props with { notes, etc.} as parameter
export default function NoteList({ notes, onNewNote }) {
  return (
    <div className="note-list">
      <div className="note-list-header">
        <h2>My Notes</h2>
        <button onClick={onNewNote}>New Note</button>
      </div>
      <div className="note-list-body">
        {notes.map((note) => (
          <div className="note-list-item" key={note.id}>
            <div className="note-list-item-title">
              <h4>{note.text.substr(0, 25)}</h4>
            </div>
            <div className="note-list-item-date">
              <p>Created: {note.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
