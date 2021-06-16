
import * as actionTypes from '../actions/actionTypes/photoTypes';
import { ISinglePhoto } from '../interfaces/ISinglePhoto';

export interface ISinglePhotoReducer {
    photoList: ISinglePhoto[];
}

const defaultState = () : ISinglePhotoReducer => ({
    photoList: [],
});

export default (state = defaultState(), action : any)=>{
    switch(action.type){
        case actionTypes.GET_PHOTO:{
            const photoData:actionTypes.IPhotoTypes['GET_PHOTO'] = action;
            return{
                ...state,
                photoList:photoData.photoList
            }
        }
        default:{
            return  state;
        }
    }
}