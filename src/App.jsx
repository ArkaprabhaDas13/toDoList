import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editFlag, setEditFlag] = useState(null);
  const [editId, setEditId] = useState(null);
  const [modifiedInput, setMmodifiedInput] = useState('');
  const [tempTodo, setTempTodo] = useState([]);
  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function pushTodos() {
    setTodos([...todos, { id: todos.length, text: input }])
    setInput('')
    console.log(todos, " : ", todos.length);
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id != id))
  }

  function handleEdit(editData) {
    console.log(editData);
    setEditFlag(editData.id)
    setEditId(editData.id)
    setMmodifiedInput(editData.text)
  }
  function modify() {
    console.log(editId);

    const modTodo = todos.map((todo) => {
      if (todo.id === editId) {
        return ({ id: editId, text: modifiedInput })
      }
      else {
        return ({ id: todo.id, text: todo.text })
      }

    })
    setTodos(modTodo)
    console.log(modTodo);
    setEditFlag(null)
    setMmodifiedInput('')
  }
  function handleModifyChange(event) {
    setMmodifiedInput(event.target.value)
  }
  return (
    <div>
      <div className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input type="text" className="form-control" onChange={handleInputChange} value={input} />
        </div>
        <button className='btn btn-primary mb-2' onClick={pushTodos}>Add</button>
      </div>
      <ol>
        {
          todos.map((todo, index) => (
            <li key={index}>
              {editFlag == todo.id ? <span><input type="text" onChange={handleModifyChange} value={modifiedInput} /> <button className='btn btn-primary mb-2' onClick={modify}>Modify</button></span> : <span> {todo.text}</span>}&nbsp;&nbsp;
              <button className="btn btn-outline-danger" onClick={() => removeTodo(todo.id)}>Remove</button>
              {editFlag==todo.id?<span></span>:<button className="btn btn-outline-warning" onClick={() => handleEdit(todo)}>Edit</button>}
            </li>
          ))
        }

      </ol>

    </div>
  )
}

export default App
