import { FC  } from 'react';
import styled from 'styled-components';

const ErrorContent = styled.div`
    width:70%;
    margin-left:150px;
    height:1000px;
    display:inline-block;
    background-color:white;
`;


export const ErrorPage: FC = () => {
    return(
        <ErrorContent>
            404
        </ErrorContent>
        
    )};