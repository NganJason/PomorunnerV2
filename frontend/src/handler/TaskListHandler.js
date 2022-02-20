import taskCreator from "./TaskHandler";

let globalTaskList

const getTaskListHandler = () => {
    if (globalTaskList === undefined) {
      globalTaskList = newTaskList(taskCreator);
    }

    return globalTaskList;
}

const newTaskList = (taskCreator) => {
    const taskList = new TaskList(taskCreator);

    return taskList
}

class TaskList {
  constructor(
    taskCreator
  ) {
    this.taskList = this.#loadTaskList();
    this.taskCreator = taskCreator
  }

  getTaskList() {
      return this.taskList
  }

  addTask() {
    this.taskList = [...this.taskList, this.taskCreator()];

    return this.taskList
  }

  editTaskContent(idx, content) {
    this.taskList[idx].editContent(content)

    return this.taskList
  }

  toggleTaskIsDone(idx) {
    this.taskList[idx].toggleIsDone()

    return this.taskList;
  }

  editTaskOrder(currIdx, newIdx) {
    if (newIdx < 0 || newIdx >= this.taskList.length) {
      return this.taskList
    }

    this.taskList[currIdx].editOrder(newIdx)

    this.#reorderTaskList(currIdx, newIdx)

    return this.taskList
  }

  #loadTaskList() {
    return this.#loadDefaultTaskList();
  }

  #loadDefaultTaskList() {
    return [];
  }

  #reorderTaskList(currIdx, newIdx) {
    let idxVal = this.taskList[currIdx]

    while (currIdx > newIdx) {
      this.taskList[currIdx] = this.taskList[currIdx-1]
      currIdx -= 1
    }

    while (currIdx < newIdx) {
      this.taskList[currIdx] = this.taskList[currIdx+1]
      currIdx += 1
    }

    this.taskList[currIdx] = idxVal
  }
}

export default getTaskListHandler;