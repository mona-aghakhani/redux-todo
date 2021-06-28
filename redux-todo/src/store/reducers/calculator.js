import { createReducer } from '@reduxjs/toolkit'

const initialState = { value: 0,total:0 }

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, value: state.value + 1 }
        case 'decrement':
            return { ...state, value: state.value - 1 }
        case 'incrementByAmount':
            return { ...state, value: state.value + action.payload }
        default:
            return state
    }
}

/**/
const _counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('increment', (state, action) => {
            state.value++
        })
        .addCase('decrement', (state, action) => {
            state.value--
        })
        .addCase('incrementByAmount', (state, action) => {
            state.value += action.payload
        })
        .addDefaultCase((state,action)=>state)
})