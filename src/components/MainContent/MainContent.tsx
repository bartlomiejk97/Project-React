import { FC } from 'react';
import styled from 'styled-components';
import {Publications} from '../MainContent/MainContentComponents/Publications';
import {ResumeWork} from '../MainContent/MainContentComponents/ResumeWork';
import {WorkSpaceSlider} from '../MainContent/MainContentComponents/WorkSpaceSlider';

const ConteinerMain = styled.div`
    width:70%;
    margin-left:150px;
    display:inline-block;
`;


export const MainContent: FC = () => {
    return (
        <ConteinerMain>
           <Publications/>
           <WorkSpaceSlider/>
           <ResumeWork/>
        </ConteinerMain>
    );
};