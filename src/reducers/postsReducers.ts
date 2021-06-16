import { ISinglePost } from '../interfaces/ISinglePost';
import * as actionTypes from '../actions/actionTypes/postTypes';

export interface IPostReducer {
    postList: ISinglePost[];
    listType : string;
}

const defaultState = () : IPostReducer => ({
    postList: [],
    listType:'Mosaic'
});

export default (state = defaultState(), action : any)=>{
    switch(action.type){
        case actionTypes.GET_POST:{
            const postData:actionTypes.IPostTypes['GET_POST'] = action;
            return{
                ...state,
                postList:postData.postList
            }
        }
        case "SET_LIST_TYPE" : {
            return {
                ...state,
                listType:action.payload
            }
        }
        default:{
            return  state;
        }
    }
}