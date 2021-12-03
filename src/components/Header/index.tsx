import React, { useContext, useState, ChangeEvent, FormEvent } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { ICreateTask, IGUT } from '../../@types';

import { Context, ActionType, LocalStorageKey } from '../../Context';
import { Container, Nav, Right } from './styles';
import Icon from '../Icon';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';
import Rating from '../Rating';
import usePersistedState from '../../utils/usePersistedState';
import Task from '../../models/Task';
import { Tasklist } from '../../models/Tasklist';


interface Props {
    toggleTheme(): void;
}

const initialGUT: IGUT = {
    gravity: 1,
    urgency: 1,
    tendency: 1
}

const initialTask: ICreateTask = {
    description: '',
    ...initialGUT
}


const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { title, color, shadow } = useContext(ThemeContext)

    const context = useContext(Context);

    const [showModal, setShowModal] = useState<boolean>(false);
    const [draft, setDraft] = usePersistedState<ICreateTask>(LocalStorageKey.CREATE_DRAFT, initialTask);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleRadioClick = (name: string, index: number) => {
        setDraft({ ...draft, [name]: index });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!draft.description || draft.description.trim() === '')
            return

        handleClose();
        const task = new Task(draft);
        if (context) {

            const tasklist = new Tasklist(...context.state.tasklist);
            tasklist.add(task);

            context.dispatch({
                type: ActionType.WRITE,
                payload: {
                    ...(context.state),
                    tasklist
                }
            });

            context.dispatch({
                type: ActionType.CLEAR_DRAFT_CREATE,
                payload: { tasklist }
            });

            setDraft(initialTask);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const { name, value } = event.target;

        setDraft({ ...draft, [name]: value });
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
    )

    return (
        <>
            <Container>
                <h1>Gutask</h1>

                <Nav>
                    <Switch
                        onChange={toggleTheme}
                        checked={title === 'dark'}
                        offColor={color.unselected}
                        onColor={color.unselected}
                        onHandleColor="#235789"
                        offHandleColor="#F1D302"
                        activeBoxShadow={shadow}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={20}
                        handleDiameter={25}
                        width={35}
                    />
                    <Icon main onClick={handleShow}>edit</Icon>
                </Nav>
            </Container>
            <Modal show={showModal} onHide={handleClose}>
                <form onSubmit={handleSubmit} >
                    <Modal.Title onHide={handleClose}> Create Task </Modal.Title>
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
                        <Right>
                            <Button type="submit" style={{ alignSelf: 'flex-end' }}> Create </Button>
                        </Right>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default Header;