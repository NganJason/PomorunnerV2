const newTaskHandler = (
  order = 0,
  id = "",
  content = "",
  isDone = false,
  date = ""
) => {
  return new TaskHandler(id, content, isDone, order, date);
};

class TaskHandler {
    constructor(
        id = "",
        content = "",
        isDone = false,
        order = 0,
        date = ""
    ) {
        this.id = id
        this.content = content
        this.isDone = isDone
        this.order = order
        this.date = date

        if (this.id === "") {
            this.id = this.#generateTaskId()
        }        
    }

    editContent(content) {
        this.content = content
    }

    toggleIsDone() {
        this.isDone = !this.isDone
    }

    editOrder(newOrder) {
        this.order = newOrder
    }

    #generateTaskId() {
        let date = new Date()
        return date.getTime()
    }
}

export default newTaskHandler;