import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post, PostList } from "./post.interface";

const postState = createFeatureSelector<Post>('posts');

export const getPostList = createSelector(postState, (state) => state.postLists);

export const getPostById = createSelector(postState, (state: Post, props: {id: number}) => {
    return state.postLists.find((list: PostList) => list.id == props.id);
})