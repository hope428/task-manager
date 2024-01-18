import classes from "./Card.module.css";

export default function Card({ task }) {
  const importanceText =
    task.importance === 1
      ? "High Priority"
      : task.importance === 2
      ? "Medium Priority"
      : "Low Priority";

  const displayDate = new Date(task.dueDate).getDate();
  const displayMonth = new Date(task.dueDate).getMonth();
  const displayYear = new Date(task.dueDate).getFullYear();
  return (
    <div className={classes.card}>
      <h1>{task.title}</h1>
      <span className={classes.details}><p>{importanceText}</p>•<p>{`${displayMonth + 1}/${displayDate}/${displayYear}`}</p></span>
      
      <span>{task.description}</span>
    </div>
  );
}
