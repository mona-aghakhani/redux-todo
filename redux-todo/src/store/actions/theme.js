import {CHANGE_DARK_MODE} from "../types";

export function darkMode(dark) {
    return {
        type: CHANGE_DARK_MODE,
        payload: dark,
    }
}