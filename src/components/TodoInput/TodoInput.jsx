import './todoInput.css'
import Button from '../Button/Button'
import { useState } from 'react'
import { useTodo } from '../../hooks/useTodo'
import { addToLocalStorage, capitalizeText } from '../utils/utils'

const TodoInput = () => {
  const [text, setText] = useState('')

  const { todos, setTodos } = useTodo()

  const addTodo = () => {
    if (text.trim() != '') {
      const newTodo = {
        description: capitalizeText(text),
        completed: false,
      }

      const updatedTodo = [...todos, newTodo]

      setTodos(updatedTodo)
      addToLocalStorage(updatedTodo)
      setText('')
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') addTodo()
  }
  return (
    <div className='input-wrapper'>
      <input
        id='addInput'
        type='text'
        placeholder='Add task'
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className='plus-area'>
        <Button border onClick={() => addTodo()}>
          +
        </Button>
      </div>
    </div>
  )
}

export default TodoInput
