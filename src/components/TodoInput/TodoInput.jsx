import './todoInput.css'
import Button from '../Button/Button'

const TodoInput = () => {
  return (
    <div className='input-wrapper'>
      <input id='addInput' type='text' placeholder='Add task' />
      <div className='plus-area'>
        <Button size={'2.2rem'} border w={'100%'}>
          +
        </Button>
      </div>
    </div>
  )
}

export default TodoInput
