import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {tasks:[],loading:false};

export const actionCreator = createAsyncThunk(
    'todo/addByPost',
    async (newTask, thunkAPI) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
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
        return newTask
    }
);

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state,action) {
            state.push(action.payload);
        },
        deleteTodo(state,action) {
           state.filter((todo,index)=>index!==action.payload)
        },
        deleteAllTodo(state, action) {
            return []
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(actionCreator.pending, (state, action) => {
            // Add user to the state array
            state.loading=true
        })
        .addCase(actionCreator.fulfilled, (state, action) => {
            // Add user to the state array
            state.tasks.push(action.payload);
            state.loading=false
        })
    }
});


console.log(todoSlice,'SHOW WHAT WE HAVE IN SLICE');
export const { addTodo, deleteTodo, deleteAllTodo } = todoSlice.actions;
export default todoSlice.reducer