let taskList

const getTaskList = () => {
    if (taskList === undefined) {
        taskList = newTaskList()
    }

    return taskList
}

const newTaskList = () => {
    const taskList = new TaskList()

    return taskList
}

class TaskList {
  constructor() {
    this.taskList = this.#loadTaskList();
  }

  getTaskList() {
      return this.taskList
  }

  addTask() {
    this.taskList = [...this.taskList, this.#newTask()];

    return this.taskList
  }

  #loadTaskList() {
    return this.#loadDefaultTaskList();
  }

  #loadDefaultTaskList() {
    return [];
  }

  #newTask() {
    return " ";
  }
}

export default getTaskList;