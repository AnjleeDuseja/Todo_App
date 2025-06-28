import React, { useState } from 'react'
import useToDo from '../Context/TodoContext';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { BiSave } from 'react-icons/bi';

function TodoComponent({id=null, todo=""}) {
   
    const [isEditable, setIsEditable]=useState(false)
    const [completed,setCompleted]=useState(false)
    
    const {updateTodo, removeTodo, toggleComplete}=useToDo();
  return (
    <>
   <div className=' w-2xl flex'>
    <input type="checkbox" name="" id="" className='mr-2' value={completed} onClick={()=> {setCompleted(!completed); toggleComplete(id,!completed)}} />
      <input type="text" value={todo} 
      className={`py-3 min-w-full text-xl outline-0 ${isEditable?"text-violet-800":"text-violet-950"} ${completed?"line-through":""}` } readOnly={!isEditable} 
      onChange={(e) => {updateTodo(id, e.target.value);}}  
      onKeyDown={(e)=>{if(e.key==="Enter"){updateTodo(id,todo)
        setIsEditable(!isEditable)
      }}}
  
  />
      </div>
    
    <div className='flex justify-evenly w-1/6 py-3 '>
     {!completed && isEditable? <BiSave  className='text-2xl text-violet-800 cursor-pointer hover:text-violet-900'
     onClick={()=>{setIsEditable(!isEditable); updateTodo(id,todo)}}  /> :
      <FaEdit className={` text-2xl  cursor-pointer   ${completed? "text-green-500 hover:text-green-600":"text-violet-800 hover:text-violet-900" }  `}   
      onClick={()=>setIsEditable(!isEditable)} />}
      <RiDeleteBin5Fill className={` text-2xl  cursor-pointer   ${completed? "text-green-500 hover:text-green-600":"text-violet-800 hover:text-violet-900" }  `}
      onClick={()=>removeTodo(id)} />
      </div>
      </>
  
  )
}

export default TodoComponent
