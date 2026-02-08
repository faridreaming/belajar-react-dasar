import { useImmer } from 'use-immer'
import TaksForm from './TaskForm'
import TaskList from './TaskList'

export default function Taks() {
  const [items, setItems] = useImmer([])

  return (
    <div>
      <h1>Task Management System</h1>
      <TaksForm setItems={setItems} />
      <h2>Task List:</h2>
      <TaskList items={items} />
    </div>
  )
}
