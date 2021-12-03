import { ITask, ICreateTask } from "../@types";

export default class Task implements ITask {

    public description: string;
    public gravity: number;
    public urgency: number;
    public tendency: number;
    public id: number;
    public status: boolean;
    public static lastId: number;
    public gut: number;

    constructor(task: ICreateTask) {
        this.description = task.description;
        this.gravity = task.gravity;
        this.urgency = task.urgency;
        this.tendency = task.tendency;
        this.status = false;
        this.id = 0;
        this.gut = this.gravity * this.urgency * this.tendency;
    }
}