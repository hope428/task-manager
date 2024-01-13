import React from "react";
import classes from "./Dashboard.module.css";
import Sidebar from "./Sidebar";
import { useOutletContext } from "react-router-dom";

export default function Dashboard() {

    const [isOpen] = useOutletContext()

  return (
    <main className={classes.main}>
      {(isOpen && <Sidebar/>)}
      <div className={classes.dashboard}>
        <h1>Your Dashboard</h1>
      </div>
    </main>
  );
}
