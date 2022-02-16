import React from "react";
import "./Tasklist.modules.scss";

import AddIcon from "@mui/icons-material/Add";
import { Fade, IconButton } from "@mui/material";
import Task from "../Task/Task";
import Paper from "@mui/material/Paper";

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
        </div>
        <div className="button-container">
          <Fade in={true} timeout={{enter: 100, exit: 100}}>
            <IconButton color="default" size="large">
              <AddIcon className="add-button" fontSize="large" />
            </IconButton>
          </Fade>
        </div>
      </Paper>
    );
}