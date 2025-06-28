import useToDo from '../Context/TodoContext';
import TodoComponent from './TodoComponent';

function TodosContainer() {
  const { todo } = useToDo();

  return (
    <div className='w-full flex flex-col items-center'>
      {todo.length !== 0 ? (
        todo.map((task) => (
          <div
            key={task.id}
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center border-2 p-4 mt-4 w-full max-w-xl rounded-xl 
              ${task.completed ? "bg-green-200 border-green-500" : "bg-violet-200 border-violet-700"}`}
          >
            <TodoComponent id={task.id} todo={task.task} completed={task.completed} />
          </div>
        ))
      ) : (
        <p className="text-gray-500 italic mt-10">No tasks yet. Add your first plan!</p>
      )}
    </div>
  );
}

export default TodosContainer;
