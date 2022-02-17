import React from "react";
import "./Clock.modules.scss";

import useClock from "./useClock"

export default function Clock(props) {
  const {currTime} = useClock()

  return (
    <div className="clock">
      {currTime}
    </div>
  );
}
