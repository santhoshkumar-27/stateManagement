import { createEntityAdapter } from "@ngrx/entity";
import { PostList, PostState } from "./post.interface";

// export const initialState: Post = {
//     postLists: []
// }

export const postsAdaptor = createEntityAdapter<PostList>();
export const initialState: PostState = postsAdaptor.getInitialState()
