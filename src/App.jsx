import { useEffect } from 'react'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos'

function App() {

  return (
    <div className='text-white'>
      <h1>Learingi Redux Toolkit</h1>
      <div className="h-full w-full flex flex-col items-center gap-10 pt-32">
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
