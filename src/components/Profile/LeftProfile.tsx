import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IState } from '../../reducers'
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../reducers/usersReducers';


const MainProfil = styled.div`
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.4);
    background-color:white;
    width:250px;
    height:auto;
    display:block;
    border-radius:5px;
    margin-left:20px;
    img.myProfileImg{
        width:100px;
        height:100px;
        border-radius:50%;
        display:block;
        margin-left:auto;
        margin-right:auto;
        margin-top:20px;
    }
    a{
        text-decoration:none;
    }

`;
const UserName = styled.div`
    color:rgb(70,88,170);
    text-align:center;
    margin-top:10px;
    font-weight:bold;
`;
const Descritions = styled.div`
    margin-top:10px;
    text-align:center;
    font-size:11px;
    margin-bottom:10px;
    color:rgb(185,187,190);

`;
const MyProfileBottomOne = styled.div`
    img.LeftImg{
        width:22px;
        height:22px;
        margin:15px 15px 0px 30px;
    }
    img.RightImg{
        width:10px;
        height:10px;
        margin-left:37px;
        border:1px solid grey;
        padding:4px 8px 4px 8px;
        border-radius:7px;
        display:inline-block;
        transform:translateY(3px);
    }
    span.SpanTop{
        font-size:13px;
        font-weight:bold;
        padding-bottom:2px;
        margin-bottom:2px;
        display:inline-block;
        transform:translateY(-3px);
    
    }
`;
const MyProfileBottomTwo = styled.div`


    margin-bottom:5px;
    img.LeftImg{
        width:20px;
        height:20px;
        margin:15px 15px 0px 30px;
    }
    img.RightImg{   
        width:10px;
        height:10px;
        margin-left:14px;
        border:1px solid grey;
        padding:4px 8px 4px 8px;
        border-radius:7px;
        display:inline-block;
        
    }
    span.SpanBottom{
        font-size:13px;
        font-weight:bold;
        margin-bottom:2px;
        display:inline-block;
        transform:translateY(-5px);
    }

`;

export const LeftProfile: FC = () => {

    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    
    if (usersList?.length > 0) {
        return (
            <MainProfil>
                <Link to="/Profile">
                    <img className="myProfileImg" src='../../media/icons/myprofile.jpg' alt="" />
                    <UserName>{usersList[0].name}</UserName>
                    <Descritions>{usersList[0].company.name}</Descritions>
                </Link>
                <MyProfileBottomOne>
                    <img className="LeftImg" src="../../media/icons/network.png" alt="" />
                    <span className="SpanTop">Your Network</span>
                    <img className="RightImg" src="../../media/icons/user-plus.png" alt="" />
                </MyProfileBottomOne>
                <MyProfileBottomTwo>
                    <img className="LeftImg" src="../../media/icons/publications.png" alt="" />
                    <span className="SpanBottom">Your Publications</span>
                    <img className="RightImg" src="../../media/icons/plus.png" alt="" />
                </MyProfileBottomTwo>
            </MainProfil>
        )
    } else {
        return(
            <MainProfil/>   
        )   
    }

};
