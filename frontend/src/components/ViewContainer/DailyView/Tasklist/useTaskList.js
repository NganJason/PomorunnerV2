import { useState, useEffect } from "react";

const useTaskList = (taskListHandler) => {
  const [taskList, setTaskList] = useState(taskListHandler.getTaskList());

  useEffect(() => {
    setTaskList(taskListHandler.getTaskList())
  }, [taskListHandler])

  const addNewTask = () => {
    setTaskList(taskListHandler.addTask());
  }

  const editTaskContent = (idx, content) => {
    setTaskList([...taskListHandler.editTaskContent(idx, content)]);
  }

  const toggleTaskIsDone = (idx) => {
    setTaskList([...taskListHandler.toggleTaskIsDone(idx)]);
  }

  const reorderTasks = (srcIdx, dstIdx) => {
    setTaskList([...taskListHandler.editTaskOrder(srcIdx, dstIdx)])
  }

  const deleteTask = (idx) => {
    setTaskList([...taskListHandler.deleteTask(idx)])
  }

  return { taskList, addNewTask, editTaskContent, toggleTaskIsDone, reorderTasks, deleteTask };
};


export default useTaskList