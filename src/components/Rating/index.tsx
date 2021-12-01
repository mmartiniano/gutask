import React, { HTMLAttributes } from 'react';

import { Container, HiddenRadio, Circle, Wrapper, Capitalized } from './styles';


interface RadioProps extends HTMLAttributes<HTMLInputElement> {
    active: boolean;
}

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
}

interface SubComponents {
    Radio: React.FC<RadioProps>
}

const Rating: React.FC<RatingProps> & SubComponents = ({ children, label, ...rest }) => {
    return (
        <Wrapper>
            {label && (
                <Capitalized>{label}</Capitalized>
            )}
            <Container {...rest}>
                {children}
            </Container>
        </Wrapper>
    );
}

const Radio: React.FC<RadioProps> = ({ children, active, ...rest }) => {
    return (
        <label>
            <HiddenRadio type="radio" {...rest} />
            <Circle active={active}>
                {children}
            </Circle>
        </label>
    );
}

Rating.Radio = Radio;

export default Rating;