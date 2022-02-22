import React from "react";
import "./Tasklist.modules.scss";

import AddIcon from "@mui/icons-material/Add";
import { Fade, IconButton } from "@mui/material";
import Task from "../Task/Task";

import useTaskList from "./useTaskList";

export default function Tasklist({title}) {
    const {
      taskList, 
      addNewTask, 
      editTaskContent, 
      toggleTaskIsDone
    } = useTaskList()

    return (
      <div
        className={"tasklist-paper"}
      >
        <div className="title-container">
          <div className="title">{title}</div>
        </div>
        <div className="tasks-container">
          {taskList.map((t, idx) => (
            <Task
              key={t.id} 
              idx={idx} 
              task={t}
              editTaskContent={editTaskContent}
              toggleTaskIsDone={toggleTaskIsDone}
             />
          ))}
        </div>
        <div className="button-container">
          <Fade in={true} timeout={{ enter: 100, exit: 100 }}>
            <IconButton color="default" size="large" onClick={addNewTask}>
              <AddIcon className="add-button" fontSize="large" />
            </IconButton>
          </Fade>
        </div>
      </div>
    );
}