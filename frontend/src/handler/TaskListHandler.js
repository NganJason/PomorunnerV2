import newTaskHandler from "./TaskHandler";

const newTaskListHandler = () => {
    const taskListHandler = new TaskListHandler(newTaskHandler);

    return taskListHandler;
}

class TaskListHandler {
  constructor(newTaskHandler) {
    this.taskList = this.#loadTaskList();
    this.newTaskHandler = newTaskHandler;
  }

  getTaskList() {
    return this.taskList;
  }

  addTask() {
    this.taskList = [...this.taskList, this.newTaskHandler()];

    return this.taskList;
  }

  editTaskContent(idx, content) {
    this.taskList[idx].editContent(content);

    return this.taskList;
  }

  toggleTaskIsDone(idx) {
    this.taskList[idx].toggleIsDone();

    return this.taskList;
  }

  editTaskOrder(currIdx, newIdx) {
    if (currIdx === newIdx) {
      return this.taskList
    }

    if (newIdx < 0 || newIdx >= this.taskList.length) {
      return this.taskList;
    }

    this.taskList[currIdx].editOrder(newIdx);

    this.#reorderTaskList(currIdx, newIdx);

    return this.taskList;
  }

  #loadTaskList() {
    return this.#loadDefaultTaskList();
  }

  #loadDefaultTaskList() {
    return [];
  }

  #reorderTaskList(currIdx, newIdx) {
    let idxVal = this.taskList[currIdx];

    while (currIdx > newIdx) {
      this.taskList[currIdx] = this.taskList[currIdx - 1];
      currIdx -= 1;
    }

    while (currIdx < newIdx) {
      this.taskList[currIdx] = this.taskList[currIdx + 1];
      currIdx += 1;
    }

    this.taskList[currIdx] = idxVal;
  }
}

export default newTaskListHandler;