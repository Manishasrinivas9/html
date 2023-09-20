
import './App.css';
import Header from './MyComponents/Header'
import ToDos from './MyComponents/ToDos'
import Footer from './MyComponents/Footer'
import { AddToDo } from './MyComponents/AddToDo';
import { useState } from 'react';
function App() {
  const onDelete=(todo)=>{
    console.log("I am on delete of todo",todo)
    //let index=todos.indexOf(todo);
    //todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }))
  }
  const [todos,setTodos]=useState([
    {
      sno:1,
      title:"Go  to the market",
      desc:"You need to go to market to get this job done"
    },
    {
      sno:2,
      title:"Go  to the study",
      desc:"You need to study to get this job done"
    },
    {
      sno:1,
      title:"Go  to the wash cloths",
      desc:"You need to wash cloths to get this job done"
    }

  ]);
  return (


    <>
      <Header title="MyToDosList" searchBar={false}/>
      <AddToDo/>
      <ToDos todos={todos} onDelete={onDelete}/>
      <Footer />

    </>
  );
}

export default App;
