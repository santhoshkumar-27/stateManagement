import { createEntityAdapter } from "@ngrx/entity";
import { PostList, PostState } from "./post.interface";

// export const initialState: Post = {
//     postLists: []
// }

export const postsAdaptor = createEntityAdapter<PostList>(); // entity adaptor for the posts
export const initialState: PostState = postsAdaptor.getInitialState(
    {
        count: 0,
    }
) // initial state
