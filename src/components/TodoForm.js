import React,{useState} from 'react'




export const TodoForm = ({addToDo}) => {
    const [value,setValue]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (value){
            addToDo(value);
            setValue('');
        }   
    };
  return (
    <form name="form1" onSubmit={handleSubmit} className='TodoForm'>
        <input type="text" value={value} placeholder='Add you task!' className='todo-input' onChange={(e)=>{setValue(e.target.value)}}/>
        <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}
