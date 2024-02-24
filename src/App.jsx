import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  function handleInputChange(event)
  {
    setInput(event.target.value);
  }

  function pushTodos()
  {
    setTodos([...todos, {id:todos.length, text:input}])
    setInput('')
    console.log(todos," : ",todos.length);
  }

  function removeTodo(id)
  {
    setTodos(todos.filter(todo=>todo.id!=id))
  }

  function handleEdit(index){
    
  }

        
  let content = <div>
    <p>{todo.text}</p>
  </div>


  return (
    <div>

      <input type="text" onChange={handleInputChange} value={input}/>
      <button className='btn btn-primary' onClick={pushTodos}>Add</button>

      
      
      <ul>

        <li>hello</li>

        {
          todos.map((todo, index) => (


            <li key={index}>
              
              {content}
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
              <button onClick={handleEdit(index)}>Edit</button>
              
            </li>
          ))
        }

      </ul>

    </div>
  )
}

export default App
