import Row from './Row'

export default function Table() {
  return (
    <table border={1}>
      <tbody>
        <Row id={1} text="Bubub" />
        <Row id={2} text="Suburban" />
        <Row id={3} text="Skibidi" />
        <Row id={4} text="Smumu" />
      </tbody>
    </table>
  )
}
