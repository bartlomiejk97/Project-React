import { FC } from 'react';
import styled from 'styled-components';


const ProfileContent = styled.div`
    width:70%;
    margin-left:150px;
    display:inline-block;
    background-color:white;
`;
const MainProfile = styled.div`
    width:100%;
    height:200px;
    border:1px solid red;
    background-color:grey;
`;
const MainExercise = styled.div`
    width:100%;
    height:200px;
    border:1px solid red;
    background-color:lightgreen;
`;


export const Profile: FC = () => {
    return(
        <ProfileContent>
            <MainProfile/>
            <MainExercise/>
            <MainExercise/>
            <MainExercise/>
            <MainExercise/>
            <MainExercise/>
            <MainExercise/>
        </ProfileContent>
        
    )};