import React, { HTMLAttributes } from 'react';
import Icon from '../Icon';

import { Container, Header, Wrapper, StyledFooter, StyledBody } from './styles';


interface SubComponents {
    Title: React.FC<TitleProps>;
    Body: React.FC;
    Footer: React.FC;
}

interface Props extends HTMLAttributes<HTMLDivElement> {
    show: boolean;
    onHide?(): void;
}

const Modal: React.FC<Props> & SubComponents = ({ children, show, onHide, ...rest }) => {

    const handleHide = (event: React.MouseEvent<HTMLElement>) => {
        if (event.target === event.currentTarget) {
            if (onHide) {
                onHide();
            }
        }
    }

    return (
        <>
            {show && (
                <Wrapper show onClick={handleHide}>
                    <Container show {...rest}>
                        {children}
                    </Container>
                </Wrapper>
            )}
        </>
    );
}

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
    onHide?(): void;
}

const Title: React.FC<TitleProps> = ({ children, onHide, ...rest }) => {
    return (
        <Header {...rest}>
            <div>
                {children}
                {onHide && (
                    <Icon pointer onClick={onHide}>close</Icon>
                )}
            </div>
        </Header>
    );
}

const Body: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
    return (
        <StyledBody {...rest}>
            {children}
        </StyledBody>
    );
}

const Footer: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
    return (
        <StyledFooter {...rest}>
            {children}
        </StyledFooter>
    );
}

Modal.Title = Title;
Modal.Footer = Footer;
Modal.Body = Body;

export default Modal;