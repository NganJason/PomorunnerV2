import React from "react";
import "./TaskList.modules.scss";
import newTaskHandler from "../../../handler/TaskHandler"

import AddIcon from "@mui/icons-material/Add";
import { Fade, IconButton } from "@mui/material";
import Task from "../Task/Task";
import {Droppable, DragDropContext} from "react-beautiful-dnd"


export default function Tasklist() {
    return (
      <DragDropContext>
        <div className={"tasklist-paper"}>
          <div className="title-container">
          </div>
          <Droppable droppableId={"abc"}>
          {
            (provided) => {
              return (
                <div
                  className="tasks-container"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                    <Task
                      key={1}
                      idx={1}
                      task={newTaskHandler()}
                    />
                  {provided.placeholder}
                </div>
              );
            }
          }
          </Droppable>
          <div className="button-container">
            <Fade in={true} timeout={{ enter: 100, exit: 100 }}>
              <IconButton color="default" size="large">
                <AddIcon className="add-button" fontSize="large" />
              </IconButton>
            </Fade>
          </div>
        </div>
      </DragDropContext>
    );
}