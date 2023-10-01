
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({todo,deleteTo,editTo,markComplete}) => {
  return (
    <div className='Todo'>
        <p className={todo.isComplete?'completed':'incompleted'} onClick={()=>markComplete(todo.id)}>{todo.tasks}</p>
        {/* <input type='input' readOnly="true" value={todo.tasks} className='todo-input-items'/> */}
        <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={()=>editTo(todo.id)}/>
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=>deleteTo(todo.id)} />
        </div>
    </div>
  )
}
