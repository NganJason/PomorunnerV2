import newTaskListHandler from "./TaskListHandler"

let globalDailyViewHandler

const getDefaultDailyViewHandler = () => {
    if (globalDailyViewHandler === undefined) {
        globalDailyViewHandler = newDailyViewHandler()
    }

    return globalDailyViewHandler
}

const newDailyViewHandler = () => {
    const dailyViewHandler = new DailyViewHandler(newTaskListHandler);
    return dailyViewHandler
}

class DailyViewHandler {
  constructor(newTaskListHandler) {
    this.newTaskListHandler = newTaskListHandler;
    this.taskLists = this.#loadDefaultTaskListHandlers();
    this.idx = this.taskLists.length - 1;
  }

  getCurrentTaskListHandler() {
    if (this.idx < 0) {
      return new Error("tasklist out of range");
    }

    return this.taskLists[this.idx];
  }

  nextTaskListHandler() {
    this.idx += 1;

    if (this.idx >= this.taskLists.length) {
      this.taskLists = [...this.taskLists, this.newTaskListHandler()];
    }
  
    return this.taskLists[this.idx];
  }

  previousTaskListHandler() {
    if (this.idx > 0) {
      this.idx -= 1;
  
      return this.taskLists[this.idx];
    } else {
      this.taskLists.unshift(this.newTaskListHandler);

      return this.taskLists[this.idx];
    }
  }

  #loadDefaultTaskListHandlers() {
    return [this.newTaskListHandler()];
  }
}

export default getDefaultDailyViewHandler;