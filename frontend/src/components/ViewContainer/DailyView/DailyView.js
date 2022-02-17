import React from "react"
import "./DailyView.modules.scss";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Tasklist from "./Tasklist/Tasklist";

export default function DailyView() {
    return (
      <div className="dailyview-container">
        <div className="arrow-container"><ArrowLeftIcon/></div>
        <div className="tasklist-container">
          <Tasklist title={"15 Feb"} />
        </div>
        <div className="arrow-container"><ArrowRightIcon/></div>
      </div>
    );
}