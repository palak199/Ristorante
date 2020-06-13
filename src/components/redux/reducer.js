import {Leaders} from '../shared/Leaders';
import {Comments} from '../shared/Comments';
import {Promotions} from '../shared/Promotions';
import {Dishes} from '../shared/Dishes';
export const initialState={
dishes:Dishes,
leaders:Leaders,
promotions:Promotions,
comments:Comments
}

export const Reducer= (state=initialState, action)=>{
    return state;
};