import { useState } from 'react'

function App() {

  const [Todos, setTodos] = useState(["musa", "emin"])
  const [inputValue, setInputValue] = useState('')

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col'>
      <h1 className='flex'>Todos</h1>
      {Todos.map((e, i) => {
        return (
          <div key={i}>
            <p className=''>{e}</p>
            <button onClick={() => {
              setTodos([
                ...Todos.slice(0, i),
                ...Todos.slice(i + 1)])
            }} className='bg-red-500'>Delete</button>
          </div>
        )
      })
      }
      <div>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder='Add Todo' />
        <button onClick={() => {
          setTodos([...Todos, inputValue])
          setInputValue('')
        }} className='bg-green-500 border-solid'>Add</button>
      </div>
    </div>
  )
}

export default App
