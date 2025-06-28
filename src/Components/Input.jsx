import { useState } from 'react';
import useToDo from '../Context/TodoContext';

function Input() {
  const [task, setTask] = useState("");

  const { addTodo } = useToDo();

  const handleSubmit = (e) => {
    if ((e.key === "Enter" || e.type === "click") && task.trim() !== "") {
      addTodo(Date.now(), task.trim());
      setTask("");
    }
  };

  return (
    <div className='flex flex-col sm:flex-row items-center justify-center w-full gap-2 sm:gap-0'>
      <input
        type="text"
        placeholder='Add a plan...'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleSubmit}
        className='mt-5 bg-violet-50 border-2  sm:border-r-0 border-violet-800 sm:rounded-l-2xl  p-3 w-full sm:w-1/2'
      />
      <button
        className='bg-violet-800 text-violet-50 sm:rounded-r-2xl mt-5 px-6 py-3.5 w-full sm:w-auto hover:bg-violet-900'
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
}

export default Input;
