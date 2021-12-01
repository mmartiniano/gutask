import styled, { css } from 'styled-components';

interface Props {
    active: boolean;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const Wrapper = styled.div`
    margin: 1.2rem 0;
`;

export const Capitalized = styled.p`
    &:first-letter {
        text-transform: capitalize !important;
    }

    font-size: 1rem;
    margin-bottom: .5rem;
`;

export const HiddenRadio = styled.input`
    display: none;
`;

export const Circle = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    display: inline-block;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid ${props => props.theme.color.secondary};

    ${(props: Props) => props.active ? css`
        background-color: ${props => props.theme.color.primary};
    ` : css`
        background-color: ${props => props.theme.color.secondary};
    `}
`;