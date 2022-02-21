import React from "react"
import "./Task.modules.scss"

import { Checkbox, TextField } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Task({
  idx,
  task,
  editTaskContent,
  toggleTaskIsDone,
}) {
    return (
      <div className="task-paper">
        <div className="task-container">
          <Checkbox
            className={"checkbox-grid"}
            checked={task.IsDone}
            disableRipple={true}
            onChange={()=>{toggleTaskIsDone(idx)}}
          />
          <TextField
            className={"text-grid"}
            variant="standard"
            multiline={true}
            InputProps={{ disableUnderline: true }}
            value={task.Content}
            onChange={(e)=>{
              editTaskContent(idx, e.target.value)
            }}
          />
          <MoreVertIcon className={"icon-grid"} />
        </div>
        <div className="drag-container">
          <DragHandleIcon/>
        </div>
      </div>
    );
}