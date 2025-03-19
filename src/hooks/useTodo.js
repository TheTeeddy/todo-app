import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'

export function useTodo() {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('Error!')
  }

  return context
}
