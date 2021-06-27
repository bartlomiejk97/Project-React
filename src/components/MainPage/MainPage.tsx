import  { FC, useEffect } from 'react';
import styled from 'styled-components';
import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { LeftProfile } from '../Profile/LeftProfile';
import { MainContent } from '../MainContent/MainContent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Entities } from '../Entities/Entities';
import { Profile } from '../Profile/Profile';
import { MainWorkSpace } from '../WorkSpace/MainWorkSpace';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/postsActions';
import { getUsers } from '../../actions/usersActions';
import { getComments } from '../../actions/commentActions';
import { getPhotos } from '../../actions/photoActions';
import { ErrorPage } from './ErrorPage'
type GetPosts = ReturnType<typeof getPosts>
type GetUsers = ReturnType<typeof getUsers>
type GetComments = ReturnType<typeof getComments>
type GetPhotos = ReturnType<typeof getPhotos>

const Wrapper = styled.div`
    background-color: rgb(226,230,238);
    font-family:'Lato', 'sans-serif';
    color:rgb(35,44,71);
    height:100%;
`;
const Content = styled.div`
    max-width: 90%;
    display:flex;
    padding-top:25px;
`;
const LeftColumn = styled.div`
    display:flex;
    flex-direction:column;
`;
const MainPage: FC = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetPosts>(getPosts());
        dispatch<GetUsers>(getUsers());
        dispatch<GetComments>(getComments());
        dispatch<GetPhotos>(getPhotos());
    })

    return (
        <Router>
            <Wrapper>
                <TopBar />
                <Content>
                    <LeftColumn>
                        <LeftProfile />
                        <LeftMenu />
                    </LeftColumn>
                    <Switch>
                        <Route path="/MainWorkSpace">
                            <MainWorkSpace />
                        </Route>
                        <Route path="/Profile">
                            <Profile/>
                        </Route>
                        <Route path="/Entities">
                            <Entities />
                        </Route>
                        <Route path="/ErrorPage">
                            <ErrorPage/>
                        </Route>
                        <Route path="/">
                            <MainContent />
                        </Route>
                    </Switch>
                </Content>
            </Wrapper>
        </Router>
    );
};
export default MainPage;
