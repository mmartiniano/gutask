import { ICreateTask, ITask } from "../@types";

export default class Task implements ITask {

    public description: string;
    public gravity: number;
    public urgency: number;
    public tendency: number;
    public id: number;
    public static lastId: number;

    constructor(task: ICreateTask) {
        this.description = task.description;
        this.gravity = task.gravity;
        this.urgency = task.urgency;
        this.tendency = task.tendency;
        this.id = Task.generateId();
    }

    static generateId() {
        if (!this.lastId) this.lastId = 0;
        else this.lastId++;

        return this.lastId;
    }

    get gut() {
        return this.gravity * this.urgency * this.tendency;
    }
}