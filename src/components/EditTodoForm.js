import React,{useState} from 'react'

export const EditTodoForm = ({todo,editTask}) => {
  const [value,setValue]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (value){
      editTask(value,todo.id);
    }else{
      editTask(todo.tasks,todo.id);
    }
  }
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <input type="input" value={value?value:todo.tasks} onChange={(e)=>setValue(e.target.value)} className='todo-input'/>
      <button type='submit' className='todo-btn'>Done</button>
    </form>
  )
}

