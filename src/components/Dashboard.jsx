import React from "react";
import classes from "./Dashboard.module.css";
import Sidebar from "./Sidebar";
import { useOutletContext } from "react-router-dom";
import Card from "./Card";

export default function Dashboard() {

  const [isOpen] = useOutletContext()

  return (
    <main className={classes.main}>
      {(isOpen && <Sidebar/>)}
      <div className={classes.dashboard}>
        <div className={classes.backlog}>
            <h1>Backlog</h1>
            <Card />
        </div>
        <div className={classes.current}>
            <h1>Current</h1>
            <Card />
        </div>
        <div className={classes.finished}>
            <h1>Completed</h1>
            <Card />
        </div>
      </div>
    </main>
  );
}
