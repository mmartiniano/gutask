import React, { useContext } from 'react';
import TaskCard from '../../components/TaskCard';
import { ActionType, Context } from '../../Context';
import Task from '../../models/Task';
import { Tasklist } from '../../models/Tasklist';

import { Content } from './styles';


const Home: React.FC = () => {
    const context = useContext(Context);
    const tasklist = context?.state.tasklist || new Tasklist();
    tasklist.sort_by_gut();

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

    return (
        <Content>
            {tasklist.map((task, key) => (
                <TaskCard key={key} task={task} onCheck={handleCheck} />
            ))}
        </Content>
    )
}

export default Home;