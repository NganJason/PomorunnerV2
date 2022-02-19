import React from "react";
import "./Tasklist.modules.scss";

import AddIcon from "@mui/icons-material/Add";
import { Fade, IconButton } from "@mui/material";
import Task from "../Task/Task";
import Paper from "@mui/material/Paper";

import useTaskList from "./useTaskList";

export default function Tasklist({title}) {
    const {taskList, addNewTask} = useTaskList()

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
          {taskList.map((_, idx) => (
            <Task key={idx}/>
          ))}
        </div>
        <div className="button-container">
          <Fade in={true} timeout={{ enter: 100, exit: 100 }}>
            <IconButton color="default" size="large" onClick={addNewTask}>
              <AddIcon className="add-button" fontSize="large" />
            </IconButton>
          </Fade>
        </div>
      </Paper>
    );
}