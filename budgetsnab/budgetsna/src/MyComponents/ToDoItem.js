import React from 'react'

const ToDoItem = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" key={todo.sno} onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  )
}

export default ToDoItem
