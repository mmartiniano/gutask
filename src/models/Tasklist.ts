import Task from "./Task";

export class Tasklist extends Array<Task> {

    add(task: Task) {
        task.id = this.max_id() + 1;
        super.push(task);
    }

    remove(task: Task) {
        const index = this.findIndex((t: Task) => {
            return task.id === t.id;
        });

        if (index > -1) {
            this.splice(index, 1);
        }
    }

    get(task: Task): Task | undefined {
        const result = this.find((t: Task) => {
            return task.id === t.id;
        });

        return result;
    }

    sort_by_gut() {
        this.sort((task_a, task_b) => (task_a.status ? 1 : 0) - (task_b.status ? 1 : 0) || task_b.gut - task_a.gut);
    }

    max_id(): number {
        return Math.max(...this.map(task => task.id), 0);
    }

}