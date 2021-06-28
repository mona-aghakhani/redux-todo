import {ADD_TODO,DELETE_TODO,DELETE_ALL_TODO} from "../types";
import {createAction} from "@reduxjs/toolkit";

export function _addTodo(newTask) {
    return {
        type: ADD_TODO,
        payload: newTask,
    }
}
export const addTodo=createAction(ADD_TODO)

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: id,
    }
}

export function deleteAllTodo() {
    return {
        type: DELETE_ALL_TODO,
        payload: null,
    }
}

export function actionCreator(newTask) {
    return (dispatch, getState) => {
        const {  todos} = getState();

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


