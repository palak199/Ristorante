import {COMMENTS} from '../../shared/Comments';
import * as actionTypes from './ActionTypes';
export const Comments= (state=COMMENTS, action)=>{
    switch (action.type)
    {   
        case actionTypes.ADD_COMMENT:
            var comment=action.payload;
            comment.id= state.length;
            comment.date=new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
};