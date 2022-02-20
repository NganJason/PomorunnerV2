import { useState } from "react";
import getTaskListHandler from "../../../../handler/TaskListHandler"; 

const useTaskList = () => {
  const [taskList, setTaskList] = useState(getTaskListHandler().taskList);

  const addNewTask = () => {
    setTaskList(getTaskListHandler().addTask());
  }

  const editTaskContent = (idx, content) => {
    setTaskList(getTaskListHandler().editTaskContent(idx, content));
  }

  const toggleTaskIsDone = (idx) => {
    setTaskList(getTaskListHandler().toggleTaskIsDone(idx));
  }

  return { taskList, addNewTask, editTaskContent, toggleTaskIsDone };
};


export default useTaskList