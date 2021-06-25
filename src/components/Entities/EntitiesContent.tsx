import { ChangeEvent, FC} from 'react';
import styled from 'styled-components';
import { imgSize } from '../../styledHelpers/ImgSize';
import { FontSize } from '../../styledHelpers/FontSize';
import { IState } from '../../reducers';
import { IPostReducer } from '../../reducers/postsReducers';
import { useSelector, useStore } from 'react-redux';
import { ISinglePhotoReducer } from '../../reducers/photoReducers';
import { IUsersReducer } from '../../reducers/usersReducers';



const EntitiesContentContainer = styled.div`
    margin-top:20px;
    width:100%;
    display:flex;
    .List{
        display:block!important;
        .item{
            display:block;
            width:100%;
        }
    }
`;
const EntitiesContainerMosaic = styled.div`
    width:95%;
    margin:auto;
    margin-left:10px;
    display: inline-grid;
    grid-template-columns: auto auto auto auto;
   
`;
const MainEntities = styled.div`
    width: 320px;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 5px 5px 0px lightgrey};
    max-height50px;
    margin:15px auto;
    padding-bottom:5px;
`;
const MiniEntities = styled.div`
    display: flex;
    align-items: center;
`;
const ImgMiniEntities = styled.img`
    width: ${imgSize[19]};
    height: ${imgSize[19]};
    border-radius: 10px;
    margin-left: 15px;
`;
const MiniEntitiesTwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 6px;
`;
const TitleEntities = styled.span`
    font-size: 20px;;
    font-weight: bold;
    color:#3d50a6;
`;
const DescriptionEntities = styled.p`
    font-size: ${FontSize[16]};
    color: lightgrey;
    margin-top: 2em;
`;
export const EntitiesContent: FC = () => {
    const {posts} = useStore().getState();

    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    const { photoList } = useSelector<IState, ISinglePhotoReducer>(state => ({
        ...state.photo
    }));
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    if (usersList?.length > 0) {
        return (
            <EntitiesContentContainer>
                <EntitiesContainerMosaic className={posts.listType}>
                    {
                        postList.slice(0,32).map(( post :any ) => (
                            <MainEntities className='item'>
                                <MiniEntities>
                                    <ImgMiniEntities src={photoList[0]?.url} alt="api-image" />
                                </MiniEntities>
                                <MiniEntitiesTwo>
                                    <TitleEntities>{post.title}</TitleEntities>
                                    <DescriptionEntities>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionEntities>
                                </MiniEntitiesTwo>
                            </MainEntities>
                        ))
                    }
                </EntitiesContainerMosaic>
            </EntitiesContentContainer>
        )
    }
    else {
        return (<></>)
    }

};
