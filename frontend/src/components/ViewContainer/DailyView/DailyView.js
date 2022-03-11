import React from "react"
import "./DailyView.modules.scss";
import useDailyView from "./useDailyView";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Tasklist from "./Tasklist/Tasklist";
import {DragDropContext} from "react-beautiful-dnd"

export default function DailyView() {
    const {taskListHandler, nextTaskListHandler, previousTaskListHandler, taskListTitle} = useDailyView()
    
    const onDragEnd = (result) => {console.log(result)}
    return (
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <div className="dailyview-container">
          <div className="arrow-container">
            <ArrowLeftIcon onClick={previousTaskListHandler} />
          </div>
          <div className="tasklist-container">
            <Tasklist title={taskListTitle} taskListHandler={taskListHandler} />
          </div>
          <div className="arrow-container">
            <ArrowRightIcon onClick={nextTaskListHandler} />
          </div>
        </div>
      </DragDropContext>
    );
}