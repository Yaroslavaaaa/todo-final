import "./index.css"

const buttons = [
    {
      type: "all",
      label: "All",
    },
    {
      type: "active",
      label: "Active",
    },
    {
      type: "done",
      label: "Done",
    },
  ];


export const Actions = ({dark, todos, setTodos, type, setType, notDoneTodos}) => {

    
    const handleChangeStatus = (type) => {
        setType(type);
    };

    const handleDelteTodo = (key) => {
        setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.key !== key)
        );
        const newArray = todos.filter((todo) => todo.key !== key)
        localStorage.setItem('todos', JSON.stringify(newArray))
    }

    const handleDelteDone = () => {

        todos.map((todo)=>
        todo.isDone?
            handleDelteTodo(todo.key):todo
        )
    }
    

    return(
        <div className={dark?"actions-dark":"actions-light"}>
            <div className="start">{notDoneTodos.length} items left</div>

            <div className="filter">
            {buttons.map((itemB) => (
                        <div
                        key={itemB.type}
                        type="button"
                        className={`action1 ${type === itemB.type ? "active" : ""}`}
                        onClick={() => handleChangeStatus(itemB.type)}
                        >
                        {itemB.label}
                        </div>
                    ))}
            </div>
            <div className="end" onClick={()=>handleDelteDone()}>Clear completed</div>
        </div>
    )
}