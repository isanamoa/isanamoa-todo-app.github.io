import React, {useContext} from 'react';
import TodoList from "./TodoList";
import { todoContext } from "../App";

const TodoCard = () => {
  const todoData = useContext(todoContext);

  return (
    <div className="flex flex-col rounded-lg bg-white mx-5">
      <div className="flex justify-center items-center gap-5 py-5 
        border-b-2 border-gray-400 rounded-tl-lg rounded-tr-lg">
        <button onClick={()=> todoData.dispatch({type:'selectAll'})}>All</button>
        <button onClick={()=> todoData.dispatch({type:'selectActive'})}>Active</button>
        <button onClick={()=> todoData.dispatch({type:'selectCompleted'})}>Completed</button>
      </div>

      {
        todoData.todos && todoData.todos.map((todo, index) => 
            <TodoList key={todo.id} 
            markAction={()=> todoData.dispatch({type:'cancelTodo', value: index})}
            restoreAction={()=> todoData.dispatch({type:'restoreTodo', value: index})}
            checkState={todo.todoState}
            listContent={todo.content} 
            deleteAction={()=> todoData.dispatch({type:'deleteItem', value: todo.id})} />
        )
      }

      <div className="flex justify-between items-center py-3 px-3 
        rounded-bl-lg rounded-br-lg">
        <div>{todoData.todos && todoData.todos.length} Count</div>
        <button onClick={()=> todoData.dispatch({type:'clearCompleted'})}>Clear Completed</button>
      </div>
    </div>
  )
}

export default TodoCard
