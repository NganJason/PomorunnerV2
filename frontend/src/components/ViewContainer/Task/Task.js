import React, {useState} from "react"
import "./Task.modules.scss"

import { Checkbox, TextField, Menu, MenuItem } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Draggable} from "react-beautiful-dnd"

export default function Task({
  idx,
  task,
  editTaskContent,
  toggleTaskIsDone,
  deleteTask
}) {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = (e) => {
      setAnchorEl(null)

      switch (e.target.id) {
        case "delete":
          deleteTask(idx)
          break
          
        default:
          break
      }
    }

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
                <MoreVertIcon onClick={handleClick} className={"icon-grid"} />
                <Menu
                  id={"options"}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  transitionDuration={400}
                  PaperProps={{
                    style: {
                      maxHeight: 30 * 4.5,
                      width: "13ch",
                      backgroundColor: "#DDDDDD",
                      opacity: "80%",
                    },
                  }}
                >
                  <MenuItem id="subtasks" dense={true} onClick={handleClose}>
                    Subtasks
                  </MenuItem>
                  <MenuItem id="delete" dense={true} onClick={handleClose}>
                    Delete
                  </MenuItem>
                </Menu>
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