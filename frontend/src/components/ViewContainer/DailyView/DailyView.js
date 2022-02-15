import React from "react"
import Tasklist from "./Tasklist/Tasklist";
import "./DailyView.modules.scss"

export default function DailyView() {
    return (
      <div className="dailyview-container">
        <div className="tasklist-container">
          <Tasklist />
        </div>
      </div>
    );
}