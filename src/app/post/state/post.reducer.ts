import { createReducer, on } from "@ngrx/store"
import { initialState } from "./post.state"
import { addPostList, updatePost } from "./post.action";

const _postReducer = createReducer(initialState, on(
    addPostList, (state, action) => {
        const postData = {
            ...action.data,
            id: state.postLists.length + 1,
        }
        return {
            ...state,
            postLists: [
                ...state.postLists,
                postData
            ]
        }
    }
), on(updatePost, (state, action) => {
    const data = action.data;
    return {
        ...state,
        postLists: [
            ...state.postLists,
            data
        ]
    }
}));

export function postReducer(state: any, action: any) {
    return _postReducer(state, action)
}