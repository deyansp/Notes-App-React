import React, { useState } from "react";

export default function NoteList(props) {
  return (
    <div className="note-list">
      <div className="note-list-header">
        <h2>My Notes</h2>
        <button>New Note</button>
      </div>
      <div className="note-list-body">
        <div className="note-list-item">
          <div className="note-list-item-title">
            <h4>FIRST TEXT LINE</h4>
          </div>
          <div className="note-list-item-date">
            <p>Created: </p>
          </div>
        </div>
      </div>
    </div>
  );
}
