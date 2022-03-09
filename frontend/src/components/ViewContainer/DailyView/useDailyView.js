import { useState } from "react";
import getDefaultDailyViewHandler from "../../../handler/DailyViewHandler";
import getDefaultTaskListTitleHandler from "../../../handler/TaskListTitleHandler"

const useDailyView = () => {
    const [taskListHandler, setTaskListHandler] = useState(
      getDefaultDailyViewHandler().getCurrentTaskListHandler()
    );

    const [taskListTitle, setTaskListTitle] = useState(
      getDefaultTaskListTitleHandler().getCurrentTitle()
    );

    const nextTaskListHandler = () => {
      setTaskListHandler(getDefaultDailyViewHandler().nextTaskListHandler())

      setTaskListTitle(getDefaultTaskListTitleHandler().getNextTitle());
    }

    const previousTaskListHandler = () => {
      setTaskListHandler(getDefaultDailyViewHandler().previousTaskListHandler())

      setTaskListTitle(getDefaultTaskListTitleHandler().getPreviousTitle());
    }

    return { taskListHandler, nextTaskListHandler, previousTaskListHandler, taskListTitle };
    
};

export default useDailyView;
