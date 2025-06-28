import React, { useState } from 'react';
import useToDo from '../Context/TodoContext';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { BiSave } from 'react-icons/bi';

function TodoComponent({ id = null, todo = "", completed = false }) {
  const [isEditable, setIsEditable] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);

  const { updateTodo, removeTodo, toggleComplete } = useToDo();

  const handleCompleteToggle = () => {
    setIsCompleted(!isCompleted);
    toggleComplete(id, !isCompleted);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-3">
      {/* Task & Checkbox */}
      <div className="flex items-center w-full gap-2">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCompleteToggle}
          className="h-5 w-5 accent-violet-800"
        />
        <input
          type="text"
          value={todo}
          className={`text-lg flex-1 outline-none bg-transparent ${
            isEditable ? "text-violet-800" : "text-violet-950"
          } ${isCompleted ? "line-through" : ""}`}
          readOnly={!isEditable}
          onChange={(e) => updateTodo(id, e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateTodo(id, todo);
              setIsEditable(false);
            }
          }}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        {!isCompleted && isEditable ? (
          <BiSave
            className="text-2xl text-violet-800 cursor-pointer hover:text-violet-900"
            onClick={() => {
              updateTodo(id, todo);
              setIsEditable(false);
            }}
          />
        ) : (
          <FaEdit
            className={`text-2xl cursor-pointer ${
              isCompleted
                ? "text-green-500 hover:text-green-600"
                : "text-violet-800 hover:text-violet-900"
            }`}
            onClick={() => setIsEditable(!isEditable)}
          />
        )}
        <RiDeleteBin5Fill
          className={`text-2xl cursor-pointer ${
            isCompleted
              ? "text-green-500 hover:text-green-600"
              : "text-violet-800 hover:text-violet-900"
          }`}
          onClick={() => removeTodo(id)}
        />
      </div>
    </div>
  );
}

export default TodoComponent;
