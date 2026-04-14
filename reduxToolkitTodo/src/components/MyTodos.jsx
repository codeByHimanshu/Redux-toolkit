import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function MyTodos() {
  const mytodo = useSelector(state => state.mytodo)
  const dispatch = useDispatch()

  return (
    <div className='bg-amber-600 text-2xl text-black w-120 h-120 border-amber-800 border-2 rounded-2xl'>
      
      <h2>my todos</h2>

      {mytodo.map((todo) => (
        <li key={todo.id} className='h-20 w-3/4 bg-white text-lg text-black'>
          {todo.text}
          
          <button
            className='p-2 m-2 border-2 border-blue-600 rounded-lg'
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            delete
          </button>
        </li>
      ))}

    </div>
  )
}

export default MyTodos