import { useState } from 'react'

import { motion, AnimatePresence, LayoutGroup} from "framer-motion";
import './App.css'

const tabs = ["tomate", "lechuga", "manzana"]



function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);


  const handleOnClick = () => {
    const id = uid()
    const todoEle = {id, value: todo}
    setTodos([...todos, todoEle])
    setTodo("")
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos([...newTodos])
  }

  console.log("todos", todos)

  return (
    <div className="App">
      <form>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value) } />
        <button type='button' onClick={handleOnClick} >agregar tarea</button>
      </form>
      <motion.ul className='todos' 
  layout>
      <AnimatePresence>

{todos.map(todo => <motion.li key={todo.id} className="todo"  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} exit={{  x: -300, opacity: 0 }}>
          <button onClick={() => handleDelete(todo.id)}>eliminar</button>
          {todo.value}
        </motion.li> )}
        
  </AnimatePresence>
      </motion.ul>
      
    </div>
  )
}

export default App
