import Task from "./Task";

export class Tasklist extends Array<Task> {

    add(task: Task) {
        task.id = this.maxId() + 1;
        super.push(task);
    }

    remove(task: Task) {
        const index = this.findIndexById(task);

        if (index > -1) {
            this.splice(index, 1);
        }
    }

    edit(task: Task) {
        const index = this.findIndexById(task);

        if (!(index > -1))
            return

        this[index].description = task.description;
        this[index].gravity = task.gravity;
        this[index].urgency = task.urgency;
        this[index].tendency = task.tendency;
        this[index].gut = task.gravity * task.urgency * task.tendency;
    }

    get(task: Task): Task | undefined {
        const result = this.find((t: Task) => {
            return task.id === t.id;
        });

        return result;
    }

    findIndexById(task: Task): number {
        const index = this.findIndex((t: Task) => {
            return task.id === t.id;
        });

        return index;
    }

    sortByGut() {
        this.sort((task_a, task_b) => (task_a.status ? 1 : 0) - (task_b.status ? 1 : 0) || task_b.gut - task_a.gut);
    }

    maxId(): number {
        return Math.max(...this.map(task => task.id), 0);
    }

}