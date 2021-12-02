import React, { useContext } from 'react';
import Card from '../../components/Card';
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
                <Card key={key}>
                    <Card.Title>{task.description}</Card.Title>
                </Card>
            ))}
        </Content>
    )
}

export default Home;