let taskListTitleHandler

const getDefaultTaskListTitleHandler = () => {
    if (taskListTitleHandler === undefined) {
        taskListTitleHandler = new TaskListTitleHandler()
    }

    return taskListTitleHandler
}

class TaskListTitleHandler {
    constructor() {
        this.date = new Date()
    }

    getCurrentTitle() {
        return this.convertDateToTitle(this.date)
    }

    getNextTitle() {
        this.date.setDate(this.date.getDate() + 1)

        return this.convertDateToTitle(this.date)
    }

    getPreviousTitle() {
        this.date.setDate(this.date.getDate() - 1);

        return this.convertDateToTitle(this.date);
    }

    convertDateToTitle() {
        let month = this.date.toLocaleString("default", { month: "long" });

        return month + " " + this.date.getDate()
    }
}

export default getDefaultTaskListTitleHandler;