import './index.css' 
import cross from '../../images/icon-cross.svg'
import check from '../../images/icon-check.svg'
import { useState } from 'react'
import { Reorder, AnimatePresence } from 'framer-motion'

export const TodoList = ({dark, todos, setTodos, filteredTodos}) => {

    const [hover, setHover] = useState(false)
    


    const handleTodoDone = (key) => {
        const newArray = todos.map((todo) => {
          if (todo.key === key) {
            return {...todo, isDone: !todo.isDone };
          } else return todo;
        });

        setTodos(newArray);

        localStorage.setItem('todos', JSON.stringify(newArray))
        };

    const handleDelteTodo = (key) => {
        setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.key !== key)
        );
        const newArray = todos.filter((todo) => todo.key !== key)
        localStorage.setItem('todos', JSON.stringify(newArray))
    }


    const onHover = (e, key) =>{
        e.preventDefault()
        const newArray = todos.map((todo) => {
            if (todo.key === key) {
              return {...todo, isHovered: !todo.isHovered };
            } else return todo;
          });
  
        setTodos(newArray);
        setHover((prevHover)=>!prevHover)
        console.log("hovered")
        
    }

    // const onHoverOver = (e, key) => {
    //     e.preventDefault()
    //     const newArray = todos.map((todo) => {
    //         if (todo.key === key) {
    //           return {...todo, isHovered: !todo.isHovered };
    //         } else return todo;
    //       });
    //     setTodos(newArray);
    //     setHover(false)
    // }




    return(
        <Reorder.Group axis='y' values={filteredTodos} onReorder={setTodos} className={dark?"todo-list-darck":"todo-list-light"}>
            {filteredTodos.map((todo) => (
                <Reorder.Item value={todo}
                whileDrag={{scale:1.1}} 
                key={todo.key} 
                className={`${dark?"todo-dark":"todo-light"}`}  
                onMouseEnter={(e)=>onHover(e, todo.key)}
                onMouseLeave={(e)=>onHover(e, todo.key)} >
                    <div className={todo.isDone?"done-todo":dark?"check-dark":"check-light"} 
                    onClick={() => handleTodoDone(todo.key)}>
                        {todo.isDone?(<img src={check} alt="check" style={{marginLeft:"5px", marginBottom:"3px"}} />):""}
                    </div>
                    <div className={`${dark?"dark-el":"light-el"} ${todo.isDone? dark?"done-dark":"done-light" : ""}`} >
                    {todo.label}
                    </div>
                    {todo.isHovered?(
                        <div className='cross' onClick={() => handleDelteTodo(todo.key)} >
                        <img src={cross} alt="cross" />
                    </div>
                    ):<div></div>}
                </Reorder.Item>
                ))}

        </Reorder.Group>
    )
}