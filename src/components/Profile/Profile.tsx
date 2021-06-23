import { FC } from 'react';
import styled from 'styled-components';
import {ProfilHeader } from '../../components/Profile/ProfileHead'
const ProfileContent = styled.div`
    width:70%;
    margin-left:150px;
    display:inline-block;
    background-color:white;
`;


export const Profile: FC = () => {
    return(
        <ProfileContent>
            <ProfilHeader></ProfilHeader>
        </ProfileContent>
        
    )};