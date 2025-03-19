import Todo from '../Todo/Todo'

import { useTodo } from '../../hooks/useTodo'

const TodosList = () => {
  const { todos } = useTodo()

  return (
    <>
      {todos.map((todo, indexTodo) => {
        return <Todo key={indexTodo} description={todo.description} />
      })}
    </>
  )
}

export default TodosList
