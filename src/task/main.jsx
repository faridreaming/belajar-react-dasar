import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Taks from './Task'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Taks />
  </StrictMode>,
)
