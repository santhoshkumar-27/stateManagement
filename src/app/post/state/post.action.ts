import { createAction, props } from "@ngrx/store";
import { PostList } from "./post.interface";
import { Update } from "@ngrx/entity";

export const addPostList = createAction('[Post Page] Add post', props<{ data: PostList }>());
export const updatePost = createAction('[Post page] update post', props<{ data: Update<PostList> }>())
export const deletePost = createAction('[Post page] delete post', props<{ id: number }>())
export const getPostListAction = createAction('[Post page] post get');
export const loadPostListAction = createAction('[Post page] post list save', props<{
    data: PostList[]
}>())
export const loadPostListFailedAction = createAction('[Post page] post list failed')