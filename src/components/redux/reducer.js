import {LEADERS} from '../shared/leaders';
import {Comments} from '../shared/comments';
import {Promotions} from '../shared/promotions';
import {Dishes} from '../shared/dishes';
export const initialState={
dishes:Dishes,
leaders:LEADERS,
promotions:Promotions,
comments:Comments
}

export const Reducer= (state=initialState, action)=>{
    return state;
};