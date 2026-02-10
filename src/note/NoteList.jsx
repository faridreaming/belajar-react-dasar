import { useContext, useMemo, useRef, useState } from 'react'
import Note from './Note'
import { NoteContext } from './NoteContext'

export default function NoteList() {
  const notes = useContext(NoteContext)
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

  const filteretNotes = useMemo(() => {
    console.info('Filtering notes...')
    return notes.filter((note) => note.text.includes(search))
  }, [notes, search])

  function handleSearch() {
    console.info('Searching notes...')
    setSearch(searchInput.current.value)
  }

  return (
    <div>
      <input ref={searchInput} type="text" placeholder="Search" />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteretNotes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  )
}
