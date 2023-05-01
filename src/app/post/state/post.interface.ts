export interface Post {
    postLists: PostList[]
}

import { EntityState, createEntityAdapter } from "@ngrx/entity";

export interface PostList {
    id?: number;
    firstName: string,
    lastName: string
}

export interface PostState extends EntityState<PostList>{}
export const postsAdaptor = createEntityAdapter<PostList>();