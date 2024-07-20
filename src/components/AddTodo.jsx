import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <form onSubmit={addTodoHandler} className="flex w-1/3">
            <input
                type="text"
                placeholder="Write Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='bg-transparent border border-gray-700/50 h-10 w-full p-2 outline-none rounded-l-lg'
            />
            <button type="submit" className='bg-green-900 px-4 rounded-r-lg'>
                Add
            </button>
        </form>
    )
}

export default AddTodo