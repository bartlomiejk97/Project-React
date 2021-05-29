import { FC } from 'react';
import styled from 'styled-components';

const EntitiesContent = styled.div`
    width:70%;
    margin-left:150px;
    display:inline-block;
    border:1px solid red;
    background-color:white;
    min-height:100vh;
`;
const EntitiesTop = styled.div`
    width:100%;
    background-color:lightgreen;
    height:100px;
`;

export const Entities: FC = () => {
    return(
        <EntitiesContent>
            <EntitiesTop></EntitiesTop>
        </EntitiesContent>
)};