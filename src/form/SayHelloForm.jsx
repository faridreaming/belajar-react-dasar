export default function SayHelloForm() {
  function handleClick(e) {
    e.preventDefault()
    const name = document.getElementById('inputName').value
    document.getElementById('textHello').innerText = `Hello ${name}`
  }

  return (
    <div>
      <form>
        <input id="inputName" />
        <button onClick={handleClick}>Say Hello</button>
      </form>
      <h1 id="textHello">Hello World</h1>
    </div>
  )
}
