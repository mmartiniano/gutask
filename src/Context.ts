import React, { Dispatch } from 'react';

import { Tasklist } from './models/Tasklist';


interface State {
    tasklist: Tasklist
}

export enum ActionType {
    WRITE = 'WRITE',
    CLEAR_DRAFT_CREATE = 'CLEAR_DRAFT_CREATE',
    CLEAR_DRAFT_EDIT = 'CLEAR_DRAFT_EDIT'
}

export enum LocalStorageKey {
    CREATE_DRAFT = 'create_task',
    EDIT_DRAFT = 'edit_task',
    TASKLIST = 'tasklist'
}

interface Action {
    type: ActionType,
    payload: State
}

export const reducer = (state: State, action: Action): State => {
    const { type, payload } = action;

    switch (type) {
        case ActionType.WRITE:
            localStorage.setItem(LocalStorageKey.TASKLIST, JSON.stringify(payload.tasklist));

            return {
                ...state,
                tasklist: payload.tasklist
            };

        case ActionType.CLEAR_DRAFT_CREATE:
            localStorage.removeItem(LocalStorageKey.CREATE_DRAFT)

            return {
                ...state,
            };

        case ActionType.CLEAR_DRAFT_EDIT:
            localStorage.removeItem(LocalStorageKey.EDIT_DRAFT)

            return {
                ...state,
            };

        default:
            return state;
    }
}

const storedtasklist = () => {
    const stored = localStorage.getItem(LocalStorageKey.TASKLIST);
    console.log(new Tasklist(JSON.parse(stored!)));
    return stored ? new Tasklist(...JSON.parse(stored)) : new Tasklist();
};

export const initialState: State = {
    tasklist: storedtasklist()
}

interface ContextType {
    state: State,
    dispatch: Dispatch<Action>
}

export const Context = React.createContext<ContextType | undefined>(undefined);