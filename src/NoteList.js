import React from "react";
import "./NoteList.css";

// destructuring props with { notes, etc.} as parameter
export default function NoteList({
  notes,
  onNewNote,
  activeNoteId,
  setActiveNoteId
}) {
  return (
    <div className="note-list">
      <div className="note-list-header">
        <h1>My Notes</h1>
        <button onClick={onNewNote}>Add Note</button>
      </div>
      <div className="note-list-body">
        {notes.map((note) => (
          <div
            className={`note-list-item ${
              note.id === activeNoteId ? "active-note" : ""
            }`}
            key={note.id}
            onClick={() => setActiveNoteId(note.id)}
          >
            <div className="note-list-item-title">
              <h2>
                {note.text && note.text.length >= 22
                  ? note.text.substr(0, 22) + "..."
                  : note.text}
              </h2>
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
