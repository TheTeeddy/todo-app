import Todo from '../Todo/Todo'

import { useTodo } from '../../hooks/useTodo'

const TodosList = () => {
  const { todos, activeTab } = useTodo()
  const filteredTodos =
    activeTab === 'open'
      ? [...todos].filter(item => !item.completed)
      : activeTab === 'completed'
      ? [...todos].filter(item => item.completed)
      : [...todos]

  const reversedList = filteredTodos.reverse()

  return (
    <>
      {reversedList.map((todo, indexTodo) => {
        return (
          <Todo
            key={indexTodo}
            description={todo.description}
            index={todos.length - 1 - indexTodo}
            completed={todo.completed}
          />
        )
      })}
    </>
  )
}

export default TodosList
