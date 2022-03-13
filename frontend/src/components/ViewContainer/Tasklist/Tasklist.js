import React from "react";
import "./Tasklist.modules.scss";
import useTaskList from "./useTaskList";

import AddIcon from "@mui/icons-material/Add";
import { Fade, IconButton } from "@mui/material";
import Task from "../Task/Task";
import {Droppable, DragDropContext} from "react-beautiful-dnd"


export default function Tasklist({title, taskListHandler}) {
    const { taskList, addNewTask, editTaskContent, toggleTaskIsDone, reorderTasks, deleteTask } =
      useTaskList(taskListHandler);

    const onDragEnd = (result) => {
      if (result.source === null || result.destination === null) {
        return;
      }

      let sourceIdx = result.source.index;
      let destinationIdx = result.destination.index;

      reorderTasks(sourceIdx, destinationIdx);
    };

    return (
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <div className={"tasklist-paper"}>
          <div className="title-container">
            <div className="title">{title}</div>
          </div>
          <Droppable droppableId={title}>
          {
            (provided) => {
              return (
                <div
                  className="tasks-container"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {taskList.map((t, idx) => (
                    <Task
                      key={t.id}
                      idx={idx}
                      task={t}
                      editTaskContent={editTaskContent}
                      toggleTaskIsDone={toggleTaskIsDone}
                      deleteTask={deleteTask}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              );
            }
          }
            
          </Droppable>
          <div className="button-container">
            <Fade in={true} timeout={{ enter: 100, exit: 100 }}>
              <IconButton color="default" size="large" onClick={addNewTask}>
                <AddIcon className="add-button" fontSize="large" />
              </IconButton>
            </Fade>
          </div>
        </div>
      </DragDropContext>
    );
}