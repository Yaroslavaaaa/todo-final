import "./index.css"

export const NoTodos = ({dark}) => {
    return(
        <>
        <h1 className={dark?"no-todo-dark":"no-todo-light"}>Start your todo list</h1>
        </>
    )
}