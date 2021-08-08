# Link to App
[CodeSandBox Link](https://fk9zl.csb.app/)

# Overview
The `App` componenet stores the notes in a state array and has the methods for creating and updating notes as well as retreiving the active note ID. `useState` hooks are used to update the state and a `useEffect` hook is used to save the notes into the browser's local storage every time there is a change in the notes array. The data and methods from `App` are passed down to the `NoteList` and `NoteEditor` components through props. `NoteList` uses the `activeNoteId` state to set the 'active-note' CSS class for indicating which note is selected from the list. 
