import { useImmer } from 'use-immer'

const initialData = {
  name: '',
  message: '',
}

export default function ContactForm() {
  const [contact, setContact] = useImmer(initialData)

  function handleNameChange(e) {
    setContact((contact) => {
      contact.name = e.target.value
    })
  }

  function handleMessageChange(e) {
    setContact((contact) => {
      contact.message = e.target.value
    })
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={contact.message}
          onChange={handleMessageChange}
        />
      </form>
      <h2>Contact Detail</h2>
      <p>Name: {contact.name}</p>
      <p>Message: {contact.message}</p>
    </div>
  )
}
