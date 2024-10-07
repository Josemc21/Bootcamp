import React, { useState } from 'react'

export default function NoteForm ({ addNote, handleLogout }) {
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5
    }

    addNote(noteObject)
    setNewNote('')
  }

  return (
    <>
      <h3>Create a new note</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder='Write your note content'
          value={newNote}
          onChange={handleChange}
        />
        <button type='submit'>Save</button>
      </form>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  )
}
