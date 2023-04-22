import { createReducer, on } from "@ngrx/store"
import { initialState } from "./post.state"

const _postReducer = createReducer(initialState);

export function postReducer(state: any, action: any) {
    return _postReducer(state, action)
}