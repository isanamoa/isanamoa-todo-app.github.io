import React, {useContext} from 'react';
import TodoList from "./TodoList";
import { todoContext } from "../App";

const TodoCard = () => {
  const todoData = useContext(todoContext);
  const { todos, dispatch, isdarkMode} = todoData;

  return (
    <div className={`flex flex-col rounded-lg mx-5  ${isdarkMode ? 'bg-slate-700 text-white' : 'bg-white'}`}>
      <div className="flex justify-center items-center gap-5 py-5 
        border-b-2 border-gray-400 rounded-tl-lg rounded-tr-lg">
        <button onClick={()=> dispatch({type:'selectAll'})}>All</button>
        <button onClick={()=> dispatch({type:'selectActive'})}>Active</button>
        <button onClick={()=> dispatch({type:'selectCompleted'})}>Completed</button>
      </div>

      {
        todos && todos.map((todo, index) => 
            <TodoList key={todo.id} 
            markAction={()=> dispatch({type:'cancelTodo', value: index})}
            restoreAction={()=> dispatch({type:'restoreTodo', value: index})}
            checkState={todo.todoState}
            listContent={todo.content} 
            deleteAction={()=> dispatch({type:'deleteItem', value: todo.id})} />
        )
      }

      <div className="flex justify-between items-center py-3 px-3 
        rounded-bl-lg rounded-br-lg">
        <div>{todos && todos.length} Count</div>
        <button onClick={()=> dispatch({type:'clearCompleted'})}>Clear Completed</button>
      </div>
    </div>
  )
}

export default TodoCard
