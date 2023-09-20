import React from 'react'
import ToDoItem from './ToDoItem'
const ToDos = (props) => {
  return (
    <div className="container">
      <h3 className=" my-3">ToDos List</h3>
      {props.todos.length==0? "No Tods to Display":
      props.todos.map((todo)=>{

        return <ToDoItem todo={todo} onDelete={props.onDelete}/>
      })
      }
      
    </div>
  )
}

export default ToDos
