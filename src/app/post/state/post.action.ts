import { createAction, props } from "@ngrx/store";
import { PostList } from "./post.interface";

export const addPostList = createAction('[Post Page] Add post', props<{data: PostList}>())