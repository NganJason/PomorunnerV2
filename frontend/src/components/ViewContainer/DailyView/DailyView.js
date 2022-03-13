import React from "react"
import "./DailyView.modules.scss";
import useDailyView from "./useDailyView";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Tasklist from "../Tasklist/Tasklist";

export default function DailyView() {
    const {taskListHandler, nextTaskListHandler, previousTaskListHandler, taskListTitle} = useDailyView()
    
    return (
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
    );
}