export default function ProfileForm({ name, setName }) {
  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <>
      <h1>Profile Form</h1>
      <input type="text" value={name} onChange={handleChange} />
    </>
  )
}
