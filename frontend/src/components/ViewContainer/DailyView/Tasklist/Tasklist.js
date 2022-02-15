import React from "react";
import Task from "../Task/Task";
import Paper from "@mui/material/Paper";
import "./Tasklist.modules.scss";

export default function Tasklist({title}) {
    return (
      <Paper
        className={"tasklist-paper"}
        classes={{ root: "tasklist-paper-root" }}
        elevation={12}
      >
        <div className="title-container">
          <div className="title">{title}</div>
        </div>
        <div className="tasks-container">
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </Paper>
    );
}