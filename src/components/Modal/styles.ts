import styled, { css } from 'styled-components';


interface Props {
    show: boolean;
}

export const Container = styled.div`
    width: 80%;
    max-height: 70vh;

    @media only screen and (min-width: 750px) {
        & {
            width: 50%;
        }
    }

    padding: 2rem;
    font-size: .9rem;

    display: flex;
    flex-direction: column;
    transform: scale(0.85, 0.85);
	background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.secondary};
	border-radius: ${props => props.theme.radius};
	overflow-y: auto;
	margin-top: 10%;
	
	opacity: 0;

    ${(props: Props) => props.show && css`
        animation: show-modal .2s forwards;
    `}

    /* Active modal */
    @keyframes show-modal {
        to {
            transform: scale(1, 1);
            margin-top: 0;
            opacity: 1;
        }
    }
`;

export const Header = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    display: flex;
    width: 100%;

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;

export const StyledFooter = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const StyledBody = styled.div`
    font-weight: bold;
    margin: 1rem 0;
    position: relative; 
`;

export const Wrapper = styled.div`
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props: Props) => props.show && css`
        animation: show-modal-wrapper .2s forwards;
    `}

    @keyframes show-modal-wrapper {
        to {
            background-color: rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(.08rem);
        }
    }
`;