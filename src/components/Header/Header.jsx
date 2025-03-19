import { useTodo } from '../../hooks/useTodo'
import './header.css'

const Header = () => {
  const { todos } = useTodo()

  let totalTasks = todos.length

  return (
    <h1 className='header'>
      You have total {totalTasks} {totalTasks === 1 ? 'task' : 'tasks'}.
    </h1>
  )
}

export default Header
