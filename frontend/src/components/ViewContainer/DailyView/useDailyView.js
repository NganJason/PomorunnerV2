import { useState } from "react";
import getDefaultDailyViewHandler from "../../../handler/DailyViewHandler";

const useDailyView = () => {
    const [taskListHandler, setTaskListHandler] = useState(
      getDefaultDailyViewHandler().getCurrentTaskListHandler()
    );

    const nextTaskListHandler = () => {
      setTaskListHandler(getDefaultDailyViewHandler().nextTaskListHandler())
    }

    const previousTaskListHandler = () => {
      setTaskListHandler(getDefaultDailyViewHandler().previousTaskListHandler())
    }

    return { taskListHandler, nextTaskListHandler, previousTaskListHandler };
    
};

export default useDailyView;
