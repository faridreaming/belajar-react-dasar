import Todo from './Todo'

export default function TodoList() {
  const data = [
    { id: 0, text: 'Learn HTML', isCompleted: true, isDeleted: true },
    { id: 1, text: 'Learn CSS', isCompleted: true, isDeleted: false },
    { id: 2, text: 'Learn JS', isCompleted: true, isDeleted: false },
    { id: 3, text: 'Learn Rust', isCompleted: false, isDeleted: false },
    { id: 4, text: 'Learn React', isCompleted: false, isDeleted: false },
    { id: 5, text: 'Learn Node.js', isCompleted: false, isDeleted: false },
    { id: 6, text: 'Learn Databases', isCompleted: false, isDeleted: false },
  ]

  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
