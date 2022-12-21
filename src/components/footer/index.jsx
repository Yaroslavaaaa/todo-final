import "./index.css"

export const Footer = ({dark}) => {
    return(
        <div className={dark?"f-dark":"f-light"}>
            Drag and drop to reorder list
        </div>
    )
}