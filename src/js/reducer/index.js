import {INCREMENT,DECREMENT} from "../const";
import {act} from "@testing-library/react";


const initialState ={
    count:0,
};

export default function rootReducer(state=initialState,action) {
    switch (action.type) {
        case INCREMENT :
            return {...state,count: state.count+action.payload};
        case DECREMENT:
            return {...state,count:state.count-action.payload};
        default:
            return state;
    }
}

