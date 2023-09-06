import * as types from '../types/searchTypes';

const searchReducer = (state='',action) => {
    switch(action.type){
        case types.VIDEO_RESPONSE:
            return {
                ...state,
                ListOfVideo : action.payload,
            }
        default :
            return state;
    }
}

export default searchReducer;