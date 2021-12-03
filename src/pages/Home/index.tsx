import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { IGUT } from '../../@types';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Rating from '../../components/Rating';
import TaskCard from '../../components/TaskCard';
import { ActionType, Context, LocalStorageKey } from '../../Context';
import Task from '../../models/Task';
import { Tasklist } from '../../models/Tasklist';
import usePersistedState from '../../utils/usePersistedState';

import { Content, Right } from './styles';

const initialGUT: IGUT = {
    gravity: 1,
    urgency: 1,
    tendency: 1
}

const initialTask: Task = {
    description: '',
    id: -1,
    status: false,
    gut: 1,
    ...initialGUT,
}


const Home: React.FC = () => {
    const context = useContext(Context);
    const tasklist = context?.state.tasklist || new Tasklist();
    tasklist.sortByGut();

    const [showModal, setShowModal] = useState<boolean>(false);
    const [draft, setDraft] = usePersistedState<Task>(LocalStorageKey.EDIT_DRAFT, initialTask);

    const handleShow = (task: Task) => {
        setDraft(task);
        setShowModal(true);
    }
    const handleClose = () => setShowModal(false);

    const handleRadioClick = (name: string, index: number) => {
        setDraft({ ...draft, [name]: index });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!draft.description || draft.description.trim() === '')
            return

        handleClose();
        if (context) {
            const tasks = new Tasklist(...context.state.tasklist);
            tasks.edit(draft);

            context.dispatch({
                type: ActionType.WRITE,
                payload: {
                    ...(context.state),
                    tasklist: tasks
                }
            });

            context.dispatch({
                type: ActionType.CLEAR_DRAFT_EDIT,
                payload: { tasklist: tasks }
            });

            setDraft(initialTask);
        }
    }

    const handleDelete = () => {
        handleClose();
        if (context) {
            const tasks = new Tasklist(...context.state.tasklist);
            tasks.remove(draft);

            context.dispatch({
                type: ActionType.WRITE,
                payload: {
                    ...(context.state),
                    tasklist: tasks
                }
            });

            context.dispatch({
                type: ActionType.CLEAR_DRAFT_EDIT,
                payload: { tasklist: tasks }
            });

            setDraft(initialTask);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setDraft({ ...draft, [name]: value });
    }

    const handleCheck = (task: Task) => {
        if (context) {
            const tasks = new Tasklist(...context.state.tasklist);
            tasks.get(task)!.status = !tasks.get(task)!.status;

            context.dispatch({
                type: ActionType.WRITE,
                payload: {
                    ...(context.state),
                    tasklist: tasks
                }
            });
        };
    }

    const RatingGroup: React.FC = () => (
        <>
            {Object.entries(initialGUT).map(([name,], key) => (
                <Rating key={key} label={name}>
                    <>
                        {[...Array(5)].map((_, index) => (
                            <Rating.Radio
                                key={index}
                                onClick={() => {
                                    handleRadioClick(name, index + 1)
                                }}
                                active={draft[name as keyof IGUT] <= index}
                            />
                        ))}
                    </>
                </Rating>
            ))}
        </>
    );

    return (
        <>
            <Content>
                {tasklist.map((task, key) => (
                    <TaskCard
                        key={key}
                        task={task}
                        onCheck={handleCheck}
                        onClick={() => { handleShow(task) }}
                    />
                ))}
            </Content>
            <Modal show={showModal} onHide={handleClose}>
                <form onSubmit={handleSubmit} >
                    <Modal.Title onHide={handleClose}> Edit Task </Modal.Title>
                    <Modal.Body>

                        <Input
                            onChange={handleChange}
                            name="description"
                            value={draft.description}
                            placeholder="Description"
                        />
                        <RatingGroup />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleDelete}> Delete </Button>
                        <Right>
                            <Button onClick={handleClose}> Cancel </Button>
                            <Button type="submit"> Save </Button>
                        </Right>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default Home;