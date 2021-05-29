import { FC } from 'react';
import styled from 'styled-components';
import { WorkSpace } from './WorkSpace';
import { WorkSpaceLast } from './WorkSpaceLast';


const MainWorkSpaces = styled.div`
    width:65%;
    margin:auto;
    display:inline-block;
    background-color:white;
    min-height:100vh;
`;

export const MainWorkSpace: FC = () => {
    return (
        <MainWorkSpaces>
            <WorkSpace/>
            <WorkSpaceLast/>
        </MainWorkSpaces>
    )
};