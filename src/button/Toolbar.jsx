export default function Toolbar({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: 'yellow',
        padding: '1rem',
      }}
    >
      <button onClick={onClick}>First</button>
      <button onClick={onClick}>Second</button>
    </div>
  )
}
