export default function HelloWorld() {
  const props = {
    text: 'Hello, World!',
  }
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </div>
  )
}

function HeaderHelloWorld({ text = 'mf, ak lp ngsh txt 🥺' }) {
  return (
    <h1
      style={{
        color: 'red',
        backgroundColor: 'aqua',
      }}
    >
      {text.toUpperCase()}
    </h1>
  )
}

function ParagraphHelloWorld() {
  const text = 'Selamat belajar ReactJS'
  const style = {
    color: 'blue',
    backgroundColor: 'yellow',
  }
  return <p style={style}>{text.toLowerCase()}</p>
}
