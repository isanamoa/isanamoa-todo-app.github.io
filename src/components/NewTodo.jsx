import React, {useState, useContext } from "react";
import { todoContext } from "../App";

const NewTodo = () => {
  const todoData = useContext(todoContext);
  const [newItem, setNewItem] = useState('');

  const { dispatch, isdarkMode} = todoData;

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(newItem != ''){
      dispatch({e, type: 'addTask', value: newItem});
      setNewItem('');
    }
  }

  return (
    <div className={`flex items-center pl-1 pr-2 py-2 my-4 mx-4 rounded-lg ${isdarkMode ? 'bg-slate-700 text-white': 'bg-white text-gray-700'}`}>
      <form className="flex justify-between w-full px-2"
        onSubmit={(e) => handleSubmit(e) }>
        <input type="text" placeholder={"Create new TODO item"}  
          className="w-full pl-3 bg-transparent border-none  
          leading-tight focus:outline-none focus:bg-white"
          onChange={ (e) => setNewItem(e.target.value) } value={ newItem } />
        <button type="submit" className="text-white bg-gradient-to-br from-purple-500 via-blue-400 to-blue-500 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-1.5 text-center">
              Add
        </button>
      </form>
    </div>
  )
}

export default NewTodo
