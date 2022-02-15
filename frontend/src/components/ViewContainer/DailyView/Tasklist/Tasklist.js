import React from "react"
import Task from "../Task/Task";
import Paper from "@mui/material/Paper";
import "./Tasklist.modules.scss"

export default function Tasklist() {
    return (
      <Paper
        className={"tasklist-paper"}
        classes={{ root: "tasklist-paper-root" }}
        elevation={12}
      >
        <Task />
        <Task />
        <Task />
        <Task />
      </Paper>
    );
}