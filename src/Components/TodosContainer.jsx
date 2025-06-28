
import useToDo from '../Context/TodoContext'

import TodoComponent from './TodoComponent';

function TodosContainer() {

  const {todo} =useToDo();
  return (
    <>
    {todo.length !==0 ? (todo.map((task)=> ( <div key={task.id} className={ ` flex border-2 
    pl-5 w-1/2  mt-5 rounded-xl ${task.completed? "bg-green-200 border-green-500":"bg-violet-200 border-violet-700"}  `} >

        <TodoComponent id={task.id} todo={task.task}/>
   


    </div>))
   ):(null) }
    </>
  )
}
export default TodosContainer
