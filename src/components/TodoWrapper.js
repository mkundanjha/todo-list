import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
    const [todos,setTodos]=useState([{id:uuidv4(),tasks:"Welcome",isEdit:false,isComplete:false}]);
    const deleteTo=(id)=>{
        setTodos(todos.filter((todo)=>{
            return todo.id!==id;
        }))
    }
    const addTodo=(value)=>{
        setTodos([...todos,{id:uuidv4(),tasks:value,isEdit:false,isComplete:false},]);
        console.log(todos);
    }
    const editTask=(value,id)=>{
        setTodos(
            todos.map((todo)=>{
                return todo.id===id?{...todo,tasks:value,isEdit:false}:todo
            })
        );
    }

    const editTo=(id)=>{
        setTodos(todos.map((todo)=>{
            return todo.id===id?{...todo,isEdit:true}:todo
        })); 
    }

    const markComplete=(id)=>{
        setTodos(todos.map((todo)=>{
            return todo.id===id?{...todo,isComplete:!todo.isComplete}:todo
        }));
    }

  return (
    <div className='TodoWrapper'>
        <h1>To-do List</h1>
        <TodoForm addToDo={addTodo}/>
        {todos.map((todo)=>{
        return todo.isEdit?<EditTodoForm key ={todo.id} todo={todo} editTask={editTask}/>:<Todo key ={todo.id} todo={todo} deleteTo={deleteTo} editTo={editTo} markComplete={markComplete}/>
        }
        )}
    </div>
  )
}
