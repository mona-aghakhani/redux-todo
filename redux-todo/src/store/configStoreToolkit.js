import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "./toolkit/todoSlice";
import themeReducer from "./reducers/theme";
import calculatorReducer from "./reducers/calculator";
import thunk from "redux-thunk";


const store = configureStore({
     reducer : {
         todos: todosReducer,
         theme: themeReducer,
         calculator: calculatorReducer,
    },
    preloadedState:{load:false},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',

});
export default store