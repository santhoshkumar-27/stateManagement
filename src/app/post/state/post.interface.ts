import { EntityState } from "@ngrx/entity";
export interface Post {
    postLists: PostList[]
}


export interface PostList {
    id?: number;
    firstName: string,
    lastName: string
}

export interface PostState extends EntityState<PostList>{}
