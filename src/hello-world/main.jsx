import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloWorld from './HelloWorld'
import Container from './Container'
import TodoList from '../todolist/TodoList'
import Table from '../table/Table'
import AlertButton from '../button/AlertButton'
import MyButton from '../button/MyButton'
import Toolbar from '../button/Toolbar'
import SearchForm from '../form/SearchForm'
import SayHelloForm from '../form/SayHelloForm'
import Counter from '../form/Counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
      <AlertButton text="Halo Bububku" message="You've clicked the button!" />
      <MyButton text="Hid Me" onSmash={() => alert('You hid me baka!')} />
      <MyButton text="Smash Me" onSmash={() => alert('You smash me baka!')} />
      <Toolbar
        onClick={(e) => {
          e.stopPropagation()
          alert("You've clicked the toolbar")
        }}
      />
      <SearchForm />

      <SayHelloForm />
      <Counter />
    </Container>
  </StrictMode>,
)
