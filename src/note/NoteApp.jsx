import { useImmerReducer } from 'use-immer'
import NoteForm from './NoteForm'
import NoteList from './NoteList'

let id = 0
const initialNotes = [
  {
    id: id++,
    text: 'Learn HTML',
    done: true,
  },
  {
    id: id++,
    text: 'Learn CSS',
    done: false,
  },
  {
    id: id++,
    text: 'Learn JavaScript',
    done: false,
  },
  {
    id: id++,
    text: 'Learn React',
    done: false,
  },
]

function noteReducer(draft, action) {
  if (action.type === 'ADD_NOTE') {
    draft.push({
      id: id++,
      text: action.text,
      done: false,
    })
  } else if (action.type === 'CHANGE_NOTE') {
    const index = draft.findIndex((note) => note.id === action.id)
    draft[index].text = action.text
    draft[index].done = action.done
  } else if (action.type === 'DELETE_NOTE') {
    const index = draft.findIndex((note) => note.id === action.id)
    draft.splice(index, 1)
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(noteReducer, initialNotes)

  function handleAddNote(text) {
    dispatch({
      type: 'ADD_NOTE',
      text,
    })
  }

  function handleChangeNote(note) {
    dispatch({
      type: 'CHANGE_NOTE',
      ...note,
    })
  }

  function handleDeleteNote(note) {
    dispatch({
      type: 'DELETE_NOTE',
      id: note.id,
    })
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  )
}
