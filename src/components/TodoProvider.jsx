import React, { useState } from 'react'
import { TodoContext } from '../context/todoContext'

const todoList = [
  {
    description: 'Hello! Add your first todo!',
    completed: true,
  },
]

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(todoList)

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
