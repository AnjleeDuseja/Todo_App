
import { useState } from 'react'
import useToDo from '../Context/TodoContext'

function Input() {
  const [task,setTask]=useState("")

  const {addTodo}=useToDo()

    const handleSubmit=(e)=>{
      if(e.key==="Enter" || e.type==="click"){
          addTodo(Date.now(),task)
          setTask("")
        }
    
    }
  return (

<div className='flex items-center justify-center w-1/2'>
    <input type="text" placeholder='Add a plan. . .' value={task}  onChange={(e)=>setTask(e.target.value)} onKeyDown={handleSubmit} className='mt-5 bg-violet-50 border-2 border-r-0 border-violet-800 rounded-l-2xl p-4 py-2 w-1/2' />
    <button className='bg-violet-800 text-violet-50 rounded-r-2xl mt-5 px-6 py-2.5 hover:bg-violet-900' onClick={handleSubmit}>Add </button>
    </div>
  )
}

export default Input
