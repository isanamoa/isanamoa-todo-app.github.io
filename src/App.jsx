import React, { useState, useReducer } from "react";
import Header from "./components/Header";
import TodoCard from "./components/TodoCard";

export let todoContext = React.createContext()

let todoStorage = localStorage.getItem('todoStorage') !== null ? JSON.parse(localStorage.getItem('todoStorage')) : [];
const reducer = (state, action) => {
  const newState = [...state];
  let newTodo = [];
  switch(action.type) {
    case 'addTask': {
      action.e.preventDefault();
        const newList = {
          id : Date.now(),
          content: action.value,
          todoState: false
      };
      newTodo = [newList, ...newState];
      localStorage.setItem('todoStorage', JSON.stringify(newTodo));      
      return newTodo;
    }
    case 'selectAll': {
      state = localStorage.getItem('todoStorage') !== null ? JSON.parse(localStorage.getItem('todoStorage')) : [];
      return state;
    }
    case 'selectActive': {
      const todoActive = newState.filter((value) => value.todoState !== true);
      return todoActive;
    }
    case 'selectCompleted': {
      const todoCompleted = newState.filter((value) => value.todoState);
      return todoCompleted;
    }
    case 'cancelTodo': {
      newState[action.value].todoState = false;
      localStorage.setItem('todoStorage', JSON.stringify(newState));
      return newState;
      //console.table(newState)
    }
    case 'restoreTodo': {
      newState[action.value].todoState = true;
      localStorage.setItem('todoStorage', JSON.stringify(newState));
      return newState;
      //console.table(newState)

    }
    case 'clearCompleted': {
      const todoClearCompleted = newState.filter((value) => value.todoState !== true);
      localStorage.setItem('todoStorage', JSON.stringify(todoClearCompleted));
      return todoClearCompleted;
    }
    case 'deleteItem': {
      const todoDeleted = newState.filter((value) => value.id !== action.value );
      localStorage.setItem('todoStorage', JSON.stringify(todoDeleted));
      return todoDeleted;
    }
    default:
      return state;
  }
}

function App() {
  const [isdarkMode, setIsDarkMode] = useState(false);
  const [todos, dispatch] = useReducer(reducer, todoStorage)

  const darkModeButton = () =>{
    setIsDarkMode(prev => !prev);
  }

  return (
    <todoContext.Provider value={{todos, isdarkMode, dispatch, setIsDarkMode}}>
      <div className={`min-h-screen w-full pb-20 ${!isdarkMode ? "bg-[#F2F2F2]":"dark:bg-slate-800"}`}>
        <Header modeButton={darkModeButton} mode={isdarkMode}/>
        <div className="md:w-1/2 md:mx-auto mt-8">
          <TodoCard />
        </div>
      </div>
    </todoContext.Provider>
    
  )
}

export default App
