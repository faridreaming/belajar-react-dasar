export default function TaskList({ items = [] }) {
  return (
    <ol>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  )
}
