import React, { HTMLAttributes } from 'react';
import Task from '../../models/Task';
import Icon from '../Icon';

import { Container, Header, GUT } from './styles';


interface Props extends HTMLAttributes<HTMLDivElement> {
    task: Task;
    onCheck(task: Task): any;
}

const Description: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, ...rest }) => {
    return (
        <Header {...rest}>
            <p>
                {children}
            </p>
        </Header>
    );
}

const TaskCard: React.FC<Props> = ({ task, onCheck, children, ...rest }) => {
    const handleCheck = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        onCheck(task);
    }

    return (
        <Container {...rest}>
            <Icon pointer onClick={handleCheck}>{task.status ? 'check_box' : 'check_box_outline_blank'}</Icon>
            <Description>{task.description}</Description>
            <GUT><span>{task.gut}</span></GUT>
            {children}
        </Container>
    );
}


export default TaskCard;