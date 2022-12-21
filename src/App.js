import { useState } from 'react';
import './App.css';
import { Header } from './components/header/index'
import { AddTodo } from './components/addTodo';
import { TodoList } from './components/todoList';
import { Actions } from './components/actions';
import { NoTodos } from './components/noTodos';
import { Footer } from './components/footer';



function App() {



  const [dark, setDark] = useState(true)

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) ||
    []
  )


  const [type, setType] = useState("all")


  const doneTodos = todos.filter((todo) => todo.isDone);
  const notDoneTodos = todos.filter((todo) => !todo.isDone);

  const filteredTodos = type === "active" ? notDoneTodos : type === "done" ? doneTodos : todos


  return (
    <div className={dark?"dark":"light"} >
     <div>
      <div style={{paddingTop:"60px"}}>
        <Header dark={dark} setDark={setDark}/></div>
        <AddTodo dark={dark} todos={todos} setTodos={setTodos}/>
        {todos.length===0?(<NoTodos dark={dark}/>):(
        <>
          <TodoList dark={dark} todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
          <Actions dark={dark} todos={todos} setTodos={setTodos} notDoneTodos={notDoneTodos} type={type} setType={setType}/>
          <Footer dark={dark} />
        </>)}
     </div>
    </div>

    
  );
}

export default App;
