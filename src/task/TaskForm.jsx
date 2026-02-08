import { useState } from 'react'

export default function TaksForm({ setItems }) {
  const [item, setItem] = useState('')

  function handleClick(e) {
    e.preventDefault()
    setItems((items) => {
      items.push(item)
    })
    setItem('')
  }

  function handleChange(e) {
    setItem(e.target.value)
  }

  return (
    <form>
      <input type="text" value={item} onChange={handleChange} />
      <button onClick={handleClick}>Add Task</button>
    </form>
  )
}
