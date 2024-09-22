import './App.css';
import { useState, useEffect } from 'react';
import {Note} from './Note';
import { create as createNote, getAll as getAllNotes } from './services/notes';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('useEffect');
    setLoading(true);

    setTimeout(() => {
      console.log('Ahora');
      getAllNotes()
        .then(notes => {
          setNotes(notes);
          setLoading(false);
        });
    }, 2000);
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Crear nota');
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: newNote,
      important: true,
    };
    
    console.log(noteToAddToState.id);

    createNote(noteToAddToState)
    /* .then(newNote => {
      setNotes([...notes, newNote]); */
      .then((newNote) => {
        setNotes((prevNotes) => prevNotes.concat(newNote));
      })
      .catch(error => {
        console.error(error);
        setError('Hubo un error');
      });
    
    console.log(noteToAddToState);

    //setNotes([...notes, noteToAddToState]);
    setNewNote('');
  };

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  console.log('render');

  return (
    <div>
      <h1>Notes</h1>
        {loading ? "Cargando..." : ""}
      <button onClick={handleShowAll}>
        { showAll ? 'Show only important' : 'Show all'}
      </button>
      <ol>
        {notesToShow.map(note =>
          <Note key={note.id} {...note} />)}
      </ol>

      <form  onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Crear nota</button>
      </form>

      {error ? <span style={{ color: 'red' }}>{ error }</span> : ''}
    </div>
  );
};