import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <div className='w-1/3'>
            {todos.map((todo) => (
                <li key={todo.id} className='m-2 p-2 text-black font-semibold list-none rounded-lg bg-slate-300/40 flex justify-between'>
                    {todo.text}
                    <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className='bg-red-700 h-full w-7 text-white rounded'
                    >X</button>
                </li>
            ))}
        </div>
    )
}

export default Todos