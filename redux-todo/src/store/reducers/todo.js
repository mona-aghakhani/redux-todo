import {ADD_TODO, DELETE_ALL_TODO, DELETE_TODO} from "../types";

const initialState = [];



export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state,action.payload];
        case DELETE_TODO:
            return state.filter((todo,index)=>index!==action.payload);
        case DELETE_ALL_TODO:
            return initialState;
        default:
            return state
    }
}

