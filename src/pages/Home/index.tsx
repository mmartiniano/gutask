import React, { useContext } from 'react';
import TaskCard from '../../components/TaskCard';
import { Context } from '../../Context';
import { Tasklist } from '../../models/Tasklist';

import { Content } from './styles';


const Home: React.FC = () => {
    const context = useContext(Context);
    const tasklist = context?.state.tasklist || new Tasklist();
    tasklist.sort_by_gut();

    return (
        <Content>
            {tasklist.map((task, key) => (
                <TaskCard key={key} task={task} />
            ))}
        </Content>
    )
}

export default Home;