import { combineReducers } from 'redux';
import users , {IUsersReducer } from './usersReducers';
import posts , { IPostReducer } from './postsReducers';
import comment,{ ICommentReducer } from './commentsReducers';


export default combineReducers({
    users,
    posts,
    comment
});

export interface IState {
    users: IUsersReducer;
    posts: IPostReducer;
    comment: ICommentReducer,
}