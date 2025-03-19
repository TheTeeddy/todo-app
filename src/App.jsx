import Header from './components/Header/Header'
import Tabs from './components/Tabs/Tabs'
import TodoInput from './components/TodoInput/TodoInput'
import TodosList from './components/TodoList/TodosList'
import TodoProvider from './components/TodoProvider'

function App() {
  return (
    <>
      <TodoProvider>
        <Header />
        <Tabs />
        <TodoInput />
        <TodosList />
      </TodoProvider>
    </>
  )
}

export default App
