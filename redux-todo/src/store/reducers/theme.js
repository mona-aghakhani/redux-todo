import {CHANGE_DARK_MODE} from "../types";

const initialState = {dark:false};

export default function themeReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_DARK_MODE:
            return {dark: action.payload};
        default:
            return state
    }
}