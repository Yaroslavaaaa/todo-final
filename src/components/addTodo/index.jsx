import './index.css' 
import { useState } from 'react'
import { v4 as uuid } from 'uuid'


export const AddTodo = ({dark, todos, setTodos, }) => {

    const [value, setValue] = useState("")

    const hanleAddTodo = () => {
        if(value!==""){
            const newObj = { key: uuid(), label: value};
            setTodos([newObj, ...todos]);
            setValue("");
            localStorage.setItem('todos', JSON.stringify([newObj, ...todos]))
        }
    }

    return(
        <div className={dark?"add-darck":"add-light"}>
            <div className={dark?"check-dark":"check-light"} onClick={hanleAddTodo}></div>
            <input
            type="text"
            value={value}
            maxLength="45"
            className={dark?"add-input-darck":"add-input-light"}
            placeholder="Create a new todo..."
            onChange={(event) => setValue(event.target.value)}
                />
        </div>
    )
}