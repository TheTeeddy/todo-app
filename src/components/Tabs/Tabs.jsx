import './tabs.css'
import { useTodo } from '../../hooks/useTodo'
import { capitalizeText } from '../utils/utils'

const Tabs = () => {
  const { todos, activeTab, setActiveTab } = useTodo()
  const tabs = ['all', 'open', 'completed']

  const getTabCount = tab => {
    switch (tab) {
      case 'all':
        return todos.length
      case 'open':
        return todos.filter(todo => !todo.completed).length
      case 'completed':
        return todos.filter(todo => todo.completed).length
      default:
        return 0
    }
  }

  const handleTabs = e => {
    setActiveTab(e.target.id)
  }
  return (
    <div className='tabs-wrapper' onClick={handleTabs}>
      {tabs.map((tab, tabIndex) => (
        <div
          key={tabIndex}
          id={tab}
          className={`tab-${tab} ${activeTab === tab ? 'active' : ''}`}
        >
          {capitalizeText(tab)} <span id={tab}>({getTabCount(tab)})</span>
        </div>
      ))}
    </div>
  )
}

export default Tabs
