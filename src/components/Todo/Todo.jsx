import { useTodo } from '../../hooks/useTodo'
import Button from '../Button/Button'

import './todo.css'

const Todo = ({ description }) => {
  const { setTodos } = useTodo()

  return (
    <div className='todo-wrapper'>
      <p className='todo-description'>{description}</p>
      <div className='todo-btns'>
        <Button invert>Done</Button>
        <Button invert>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  )
}

export default Todo
