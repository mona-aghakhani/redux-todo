import {createAction} from "@reduxjs/toolkit";

export function increment(amount) {
    return {
        type: 'increment',
        payload: amount,
    }
}

export function decrement(amount) {
    return {
        type: 'decrement',
        payload: amount,
    }
}

export function incrementByAmount(amount) {
    return {
        type: 'incrementByAmount',
        payload: amount,
    }
}




















/*with redux-toolkit*/
const _increment = createAction('increment');
