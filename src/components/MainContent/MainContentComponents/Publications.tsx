import { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPostReducer } from '../../../reducers/postsReducers';
import { ICommentReducer } from '../../../reducers/commentsReducers';
import { IUsersReducer } from '../../../reducers/usersReducers';

const PublicationsContent = styled.div`
    display:flex;
    width:100%;
    height:320px;
    background-color:white;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    border-radius:7px;
`;
const PhotoLeft = styled.div`
    width:400px;
    height:300px;
    background-color:lightgreen;    
    border-top-left-radius:7px;
    border-bottom-left-radius:7px;
    background-image:url("../../media/icons/leftsideimg.jpg");
    background-size: cover;
`;
const PhotoLeftText = styled.div`
    color:white;
    text-align:left;
    margin-left:15px;
    margin-top:200px;
    font-size:14px;
    opacity:0.8;
    p.Descrition{
        font-size:12px;
        img{
            
            width:23px;
            height:23px;
            border-radius:50%;
            margin-top:5px;
            
        }
    }
`;
const RightPublications = styled.div`
    width:100%;
`;
const RightPublicationsContent = styled.div`
    margin-top:10px;
    margin-left:20px;
`;
const RightPublicationsTitle = styled.h1`
    color:rgb(84,91,112);
    font-weight:bold;
    font-size:25px;
`;
const RightPublicationsMini = styled.div`
    display:flex;
    width:100%;
    margin-top:5px;
    img{
        width:55px;
        height:55px;
        margin-top:10px;
        
    }
    p{
        color:rgb(84,91,112);
        font-weight:bold;
        font-size:15px;
        margin-top:15px;
        margin-left:10px;
    }
    p.textDescription{
        font-size:13px;
        margin-top:-5px;
    }
    img.imgDecription{
        
        width:25px;
        height:25px;
        border-radius:50%;
    }
`;
const RightPublicationsBottom = styled.h1`
    color:rgb(98,113,182);
    font-weight:bold;
    margin-top:15px;
`;


export const Publications: FC = () => {

    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    if (usersList?.length > 0) {
    return(
        <PublicationsContent>
        <PhotoLeft>
            <PhotoLeftText>
                <p className="PublicationsText">{postList[0].body}</p>
                <p className="Descrition">10.05.2021<img className="myProfileImg" src="../../media/icons/myprofile.jpg" alt=""></img>{usersList[0].name}</p>
            </PhotoLeftText>
        </PhotoLeft>
        <RightPublications>
            <RightPublicationsContent>
                <RightPublicationsTitle>Latest Publications</RightPublicationsTitle>
                <RightPublicationsMini>
                    <img src="../../../media/icons/peoplehands.jpg" alt=""></img>
                    <p>{postList[0].body}<p className="textDescription"> 10.05.2021r. <img className="imgDecription" src="../../../media/icons/myprofile.jpg" alt=""></img>{usersList[0].name}</p></p>
                </RightPublicationsMini>
                <RightPublicationsMini>
                    <img src="../../../media/icons/peoplehands.jpg" alt=""></img>
                    <p>{postList[1].body}<p className="textDescription"> 10.05.2021r. <img className="imgDecription" src="../../../media/icons/myprofile.jpg" alt=""></img>{usersList[1].name}</p></p>
                </RightPublicationsMini>
                <RightPublicationsMini>
                    <img src="../../../media/icons/peoplehands.jpg" alt=""></img>
                    <p>{postList[2].body}<p className="textDescription"> 10.05.2021r. <img className="imgDecription" src="../../../media/icons/myprofile.jpg" alt=""></img>{usersList[2].name}</p></p>
                </RightPublicationsMini>
                <RightPublicationsBottom>
                    See more publications
                </RightPublicationsBottom>
            </RightPublicationsContent>
        </RightPublications>
        </PublicationsContent>
    )}else{
        return <></>
    }
};