import React from "react";
import DailyView from "./DailyView/DailyView";
import "./ViewContainer.modules.scss"

export default function ViewContainer(props) {
    return (
        <div className="view-container">
            <DailyView/>
        </div>
    )
}