import React from "react";
import classes from "./Dashboard.module.css";
import Sidebar from "./Sidebar";
import { useOutletContext, useLoaderData } from "react-router-dom";
import Card from "./Card";

export default function Dashboard() {
  const [isOpen] = useOutletContext();
  const tasks = useLoaderData()

  console.log(tasks)
  return (
    <main className={classes.main}>
      {isOpen && <Sidebar />}
      <div className={classes.dashboard}>
        <div className={classes.backlog}>
          <h1>Backlog</h1>
          {tasks.map((task) => {
            if(task.importance === 3){
              return <Card key={task.id} task={task}/>
            }
          })}
        </div>
        <div className={classes.current}>
          <h1>Current</h1>
          {tasks.map((task) => {
            if(task.importance === 2){
              return <Card key={task.id} task={task}/>
            }
          })}
        </div>
        <div className={classes.finished}>
          <h1>Completed</h1>
          {tasks.map((task) => {
            if(task.importance === 1){
              return <Card key={task.id} task={task}/>
            }
          })}
        </div>
      </div>
    </main>
  );
}
export async function loader() {
  const response = await fetch("http://localhost:8080/tasks");
  const data = await response.json();
  return data.tasks;
}
