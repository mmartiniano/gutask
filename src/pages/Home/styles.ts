import styled from 'styled-components';


export const Content = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 2rem;

    @media only screen and (min-width: 768px) {
        & {
            width: 40%;
        }
    }

    @media only screen and (min-width: 992px) {
        & {
            width: 35%;
        }
    }
`;

export const Right = styled.div`
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-content: flex-end;

    div + div {
        margin-left: 1rem;
    }
`;