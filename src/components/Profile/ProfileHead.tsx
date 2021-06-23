import { FC } from 'react';
import styled from 'styled-components';

const ProfilContent = styled.div`
    width: 100%;
    margin: 0;
    display: block;
`;

const TopNavigation = styled.div`

    padding-left: 950px;
    display: flex;
    text-align: right;
    padding-top: 1%;
  
`;

export const NavigationPictures = styled.img`
    height: 15px;
    width: 15px;
    margin-left: 30px;
    margin-right: 5px;
    cursor: pointer;
`;

const NavigationsText = styled.div`
    font-size: 15px;
    font-family: Arial;
    color: black;
    cursor: pointer;
    &:hover {
        color: lightgrey;
    }
`;


export const ProfilHeader: FC = () => {

    return (
        < ProfilContent>
            <TopNavigation>
                <NavigationPictures src="../../media/icons/comments.png"/>
                <NavigationsText>Message</NavigationsText>
                <NavigationPictures src="../../media/icons/settings.png"/>
                <NavigationsText>Create a request</NavigationsText>
                <NavigationPictures src="../../media/icons/user-plus.png"/>
                <NavigationsText>Add to a cluster</NavigationsText>
                <NavigationPictures src="../../media/icons/cancel.png"/>
            </TopNavigation>
         
        </ProfilContent>
    )
};