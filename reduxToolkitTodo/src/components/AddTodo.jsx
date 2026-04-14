import React, { use, useState } from 'react'
import {useDispatch} from "react-redux"
import {addTodo} from "../features/todo/todoSlice"


function AddTodo() {

  const [input, setInput] = useState("")
  const dispatch = useDispatch()


  function AddTodoHandle(e) {
    e.preventDefault()
 dispatch(addTodo(input))
    setInput("")         
  }

  return (
    <>
    <div className='flex flex-col max-w-150 max-h-150 items-center text-center bg-black text-2xl text-white'>

      <form 
        onSubmit={AddTodoHandle}
        className='flex  flex-col w-2/3 min-h-80 bg-white text-2xl text-black rounded-lg m-10 p-10'
      >

        <input
          type="text"
          className='bg-amber-100 border-2 border-black w-full h-20'
          placeholder='enter todo here'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">
          submit
        </button>

      </form>
    </div>
    </>
  )
}

export default AddTodo