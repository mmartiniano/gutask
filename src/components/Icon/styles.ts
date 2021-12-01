import styled, { css } from 'styled-components';

interface Props {
    pointer?: boolean;
    main?: boolean;
}

export const MaterialIcon = styled.i`

    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: 'liga';
    -moz-font-feature-settings: 'liga';
    font-feature-settings: 'liga';

    ${(props: Props) => props.pointer && css`
        cursor: pointer;
    `}

    margin-right: .3rem;

    ${(props: Props) => props.main && css`
        margin-right: 0;
        background-color: ${props => props.theme.color.secondary};
        color: ${props => props.theme.color.primary};
        padding: .5rem;
        border-radius: .3rem;
        cursor: pointer;
    `}
`;