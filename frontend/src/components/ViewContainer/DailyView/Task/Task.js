import React from "react"
import "./Task.modules.scss"

import { Checkbox, TextField } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Draggable} from "react-beautiful-dnd"

export default function Task({
  idx,
  task,
  editTaskContent,
  toggleTaskIsDone,
}) {
    return (
      <Draggable draggableId={`${task.id}`} index={idx}>
        {(provided) => {
          return (
            <div
              className="task-paper"
              ref={provided.innerRef}
              {...provided.draggableProps}
            >
              <div className="task-container">
                <Checkbox
                  className={"checkbox-grid"}
                  checked={task.isDone}
                  disableRipple={true}
                  onChange={() => {
                    toggleTaskIsDone(idx);
                  }}
                />
                <TextField
                  className={"text-grid"}
                  variant="standard"
                  multiline={true}
                  InputProps={{ disableUnderline: true }}
                  value={task.content}
                  onChange={(e) => {
                    editTaskContent(idx, e.target.value);
                  }}
                />
                <MoreVertIcon className={"icon-grid"} />
              </div>
              <div className="drag-container" {...provided.dragHandleProps}>
                <DragHandleIcon />
              </div>
            </div>
          );
        }}
      </Draggable>
    );
}