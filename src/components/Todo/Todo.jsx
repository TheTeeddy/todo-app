import { useState } from 'react'
import { useTodo } from '../../hooks/useTodo'
import Button from '../Button/Button'
import { addToLocalStorage } from '../utils/utils'

import './todo.css'

const Todo = ({ description, index, completed }) => {
  const { todos, setTodos } = useTodo()

  function deleteTodo(i) {
    const updatedTodoList = todos.filter((_, idx) => idx !== i)
    setTodos(updatedTodoList)
    addToLocalStorage(updatedTodoList)
  }

  function finishTask(i) {
    const newTodoList = todos.map((todo, idx) => {
      if (idx === i) {
        return { ...todo, completed: true }
      }
      return todo
    })
    const sortedTodoList = newTodoList.sort((a, b) =>
      a.completed === b.completed ? 0 : a.completed ? -1 : 1
    )

    setTodos(sortedTodoList)
    addToLocalStorage(sortedTodoList)
  }

  return (
    <div className='todo-wrapper'>
      <p className='todo-description'>{description}</p>
      <div className='todo-btns'>
        <Button invert onClick={() => finishTask(index)} disabled={completed}>
          Done
        </Button>
        <Button onClick={() => deleteTodo(index)}>Delete</Button>
      </div>
    </div>
  )
}

export default Todo
