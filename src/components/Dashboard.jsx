import React from "react";
import classes from "./Dashboard.module.css";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <main className={classes.main}>
      <Sidebar />
      <div className={classes.dashboard}>
        <h1>Your Dashboard</h1>
      </div>
    </main>
  );
}
