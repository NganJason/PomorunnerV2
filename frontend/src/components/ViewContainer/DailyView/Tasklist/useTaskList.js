import { useState } from "react";
import getTaskList from "../../../../controller/TaskList"; 

const useTaskList = () => {
  const [taskList, setTaskList] = useState(getTaskList().taskList);

  const addNewTask = () => {
    setTaskList(getTaskList().addTask());
  }

  return { taskList, addNewTask };
};


export default useTaskList