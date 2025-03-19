import { useState } from 'react'
import './tabs.css'
import { useTodo } from '../../hooks/useTodo'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('all')

  const { todos } = useTodo()

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

  const tabs = ['all', 'open', 'completed']
  return (
    <div className='tabs-wrapper' onClick={handleTabs}>
      {tabs.map((tab, tabIndex) => (
        <div
          key={tabIndex}
          id={tab}
          className={`tab-${tab} ${activeTab === tab ? 'active' : ''}`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}{' '}
          <span id={tab}>({getTabCount(tab)})</span>
        </div>
      ))}
    </div>
  )
}

export default Tabs
