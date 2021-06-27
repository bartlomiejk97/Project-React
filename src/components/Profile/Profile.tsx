import { FC  } from 'react';
import styled from 'styled-components';
import {ProfilHeader } from '../../components/Profile/ProfileHead';
import { ProfileContent } from '../Profile/ProfileContent';
import { ProfileBottom } from './ProfileBottom';
const ProfileContentAll = styled.div`
    width:70%;
    margin-left:150px;
    display:inline-block;
    background-color:white;
`;



export const Profile: FC = () => {
    return(
        <ProfileContentAll>
            <ProfilHeader/>
            <ProfileContent/>
            <ProfileBottom/>
        </ProfileContentAll>
        
    )};