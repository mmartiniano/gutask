export interface IGUT {
    gravity: number;
    urgency: number;
    tendency: number;
}

export interface ICreateTask extends IGUT {
    description: string;
}

export interface ITask extends ICreateTask {
    id: number;
    status: boolean;
}