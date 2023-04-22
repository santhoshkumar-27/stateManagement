import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "./post.interface";

const postState = createFeatureSelector<Post>('posts');

export const getPostList = createSelector(postState, (state) => state.postLists);