import React from "react"
import "./Task.modules.scss"

import { Checkbox, Paper, TextField } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Task() {
    return (
      <Paper className="task-paper" elevation={4}>
        <div className="task-container">
          <Checkbox
            className={"checkbox-grid"}
            checked={false}
            disableRipple={true}
          />
          <TextField
            className={"text-grid"}
            variant="standard"
            multiline={true}
            InputProps={{ disableUnderline: true }}
          />
          <MoreVertIcon className={"icon-grid"} />
        </div>
        <div className="drag-container">
          <DragHandleIcon/>
        </div>
      </Paper>
    );
}