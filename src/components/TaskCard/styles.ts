import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    box-shadow: ${props => props.theme.shadow};
    padding: 2rem;
    font-size: .9rem;

    display: flex;
    justify-content: space-between;

    & + & {
        margin-top: 1.5rem;
    }
`;

export const Header = styled.div`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
    display: flex;
    text-align: left;
    width: 80%;
`;


export const GUT = styled.span`
    display: flex;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: ${props => props.theme.color.unselected};
    color: ${props => props.theme.color.primary};
    font-weight: bold;
    justify-content: center;
    align-items: center;
`;