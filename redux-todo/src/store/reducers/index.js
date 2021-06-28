import { combineReducers } from 'redux'

import todosReducer from './todo'
import themeReducer from './theme'
import calculatorReducer from './calculator'

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    theme: themeReducer,
    calculator: calculatorReducer,
});

export default rootReducer