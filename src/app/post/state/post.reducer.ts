import { createReducer, on } from "@ngrx/store"
import { initialState } from "./post.state"
import { addPostList, deletePost, updatePost } from "./post.action";
import { deepClone } from "src/app/shared/utilit";
import { PostList } from "./post.interface";

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
    // const newPostLists = deepClone<PostList[]>(state.postLists);
    // const index = newPostLists.findIndex((list: any) => list.id == data.id);
    // newPostLists[index] = data;
    const newPostLists = state.postLists.map((list: PostList) => list.id == data.id ? data : list)
    return {
        ...state,
        postLists: [
            ...newPostLists
        ]
    }
}), on(deletePost, (state, action) => {
    const newPostLists = state.postLists.filter((list: PostList) => list.id != action.id)
    return {
        ...state,
        postLists: [
            ...newPostLists
        ]
    }
}));

export function postReducer(state: any, action: any) {
    return _postReducer(state, action)
}