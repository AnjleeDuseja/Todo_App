import React, { createContext, useContext } from "react";
export const todoContext=createContext({
    todo:[],
    addTodo:(id,task)=>{},
    removeTodo:(id)=>{},
    updateTodo:(id)=>{},
    toggleComplete:(id,completed)=>{},
});

export const TodoProvider=todoContext.Provider;


export function useToDo(){
    return useContext(todoContext);
}
export default  useToDo;