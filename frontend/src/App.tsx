import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [Todos, setTodos] = useState(["musa", "emin"])
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    setTodos([...Todos, inputValue])
    setInputValue('')
    axios.post('http://localhost:3000', { description: inputValue })
  }

  const handleDelete = (id: any) => {
    setTodos([...Todos.slice(0, id), ...Todos.slice(id + 1)])
    axios.delete('http://localhost:3000/' + id)
  }

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(result => console.log(result.data))
  }, [])

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col bg-gray-900'>
      <h2 className='flex mb-2 bg-gray-700 h-[50px] w-[500px] text-white items-center justify-center border border-gray-500 rounded-md font-bold'>Todos</h2>

      <div className='bg-gray-700 container w-[500px] p-4 border border-gray-500 rounded-md'>
        {Todos.map((e, i) => {
          return (
            <div className='bg-gray-600 border border-gray-500 rounded-md flex-row p-2 flex items-center justify-between text-white mb-4' key={i}>
              <p className=''>{e}</p>
              <button onClick={() => handleDelete(i)} className='bg-red-500 border-solid hover:bg-red-400 transition w-[80px] rounded-md p-2 ml-2 text-white'>Delete</button>
            </div>
          )
        })
        }
        <div className='flex items-center justify-between'>
          <input required className='outline-none bg-transparent border border-gray-500 p-2 w-[350px] text-white' value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder='Add Todo' />
          <button onClick={handleAdd} className='bg-blue-500 border-solid hover:bg-blue-400 transition w-[80px] rounded-md p-2 ml-2 text-white' > Add</button>
        </div>
      </div>
    </div >
  )
}

export default App
