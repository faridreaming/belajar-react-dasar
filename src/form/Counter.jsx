import { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1)
          console.log(counter)
        }}
      >
        Icrement
      </button>

      <h1>Counter: {counter}</h1>
    </div>
  )
}
