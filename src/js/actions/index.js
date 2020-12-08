import {INCREMENT,DECREMENT} from "../const";

export const inc =(number)=>{
    return{
        type: INCREMENT,
        payload: number
    };
};
export const dec =(payload)=>{
    return{
        type: DECREMENT,
        payload,
    };
};
