import React, { useEffect, useState } from 'react'
import { TodoContext } from '../context/todoContext'
import { getFromLocalStorage } from './utils/utils'

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    if (!localStorage.getItem('todos'))
      localStorage.setItem(
        'todos',
        JSON.stringify([
          {
            description: 'Hello! Add your first todo!',
            completed: false,
          },
        ])
      )
    const todoList = JSON.parse(getFromLocalStorage())
    setTodos(todoList)
  }, [])

  return (
    <TodoContext.Provider value={{ todos, setTodos, activeTab, setActiveTab }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
