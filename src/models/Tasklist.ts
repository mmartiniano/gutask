import Task from "./Task";

export class Tasklist extends Array {
    get(id: number) {
        this.find((task: Task) => {
            return task.id === id;
        })
    }

    sort_by_gut() {
        this.sort((task_a, task_b) => task_b.gut - task_a.gut);
    }

}