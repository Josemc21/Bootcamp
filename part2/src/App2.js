import './App.css';
import { useState } from 'react';
import {Note} from './Note';

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Crear nota');
    console.log(newNote);
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    console.log(noteToAddToState);

    setNotes([...notes, noteToAddToState]);
    setNewNote('');
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        { showAll ? 'Show only important' : 'Show all'}
      </button>
      <ol>
        {notesToShow.map(note =>
          <Note key={note.id} id={note.id} content={note.content} date={note.date} />)}
      </ol>

      <form  onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={newNote}/>
          <button>Crear nota</button>
        </form>
    </div>
  );
};