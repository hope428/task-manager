import classes from "./Card.module.css"

export default function Card({task}){

    const importanceText = task.importance === 1 ? "High Priority" : task.importance === 2 ? "Medium Priority" : "Low Priority"

    return (
        <div className={classes.card}>
            <span>{importanceText}</span>
            <p>{task.title}</p>
            <p>{task.dueDate}</p>
            <span>{task.description}</span>
        </div>
    )
}