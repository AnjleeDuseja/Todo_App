import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from "./Context/TodoContext"
import HomePage from './Components/HomePage'

function App() {


 

  const [todo, setTodo]=useState([]);

  //function to add todo to todo array
  const addTodo=(id,task)=>{

    if(task!==""){

      const newTodo= {
        id:id,
        task:task,
        completed:false
      }
      setTodo(preTodo=>[...preTodo, newTodo])}
      
  }

  
  //function to remove todo from todo array
  const removeTodo=(id)=>{
    const updatedTodo=todo.filter((task)=>task.id !== id);
      setTodo(updatedTodo || [])
     }

  //function to update todo in todo array 
  const updateTodo = (id, task) => {
    const updatedTodo=todo.map((t) => t.id === id ? { ...t, task } : t);
    setTodo(updatedTodo)
    
};

const toggleComplete=(id,completed)=>{

  console.log(completed)
   const updatedTodo=todo.map((t) => t.id === id ? { ...t, completed } : t);
    setTodo(updatedTodo)

}


  return (
    <TodoProvider value={{todo,addTodo,removeTodo, updateTodo, toggleComplete}}>
    <HomePage/>
    </TodoProvider>
    
  )
}

export default App
