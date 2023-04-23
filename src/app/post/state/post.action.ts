import { createAction, props } from "@ngrx/store";
import { PostList } from "./post.interface";

export const addPostList = createAction('[Post Page] Add post', props<{data: PostList}>());
export const updatePost = createAction('[Post page] update post', props<{data: PostList}>())
export const deletePost = createAction('[Post page] delete post', props<{id: number}>())