import {createAction, createReducer} from "@reduxjs/toolkit";

export const addTodo = createAction('todo/add');
export const deleteTodo = createAction('todo/delete');
export const deleteAllTodo = createAction('todo/deleteAll');


export function actionCreator(newTask) {
    return (dispatch, getState) => {
        const {todos} = getState();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: newTask,
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (todos.length>5) {
                    dispatch(deleteAllTodo())
                }
                dispatch(addTodo(newTask));
            });



    };

}

const todosReducer = createReducer([], (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
            state.push(action.payload);
                return state
        })
        .addCase(deleteTodo, (state, action) => {
            return state.filter((todo,index)=>index!==action.payload);

        })
        .addCase(deleteAllTodo, (state, action) => {
          return  []
        })
});
export default todosReducer