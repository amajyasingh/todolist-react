import './App.css';
import Todolist from './components/todolist';
import { useState } from 'react';

function App() {
  const [todo,setTodo] = useState("");
  const [todoItems, setTodoItems] = useState([])
  const handleTodoChange = (event) => {
    setTodo(event.target.value)
  }
  const handleAddTodo = () => {
      console.log(todo);
      const date = new Date()
      const newTodo = {
        id : date.getTime(),
        todoItem : todo
      }
      setTodoItems([...todoItems, newTodo])
      setTodo("")
  }
  return (
   <div>
     <h1>Todolist</h1>
     <input type="text" value={todo} placeholder = "Enter todo" onChange={handleTodoChange} />
     <button onClick={handleAddTodo} >Add Todo</button>
     <div id='todolist__contianer' >
       {todoItems.map((todoItem) => <Todolist key={todoItem.id} setTodoItems = {setTodoItems} todoItems = {todoItems} item = {todoItem} /> )}
     </div>
   </div>
  );
}

export default App;