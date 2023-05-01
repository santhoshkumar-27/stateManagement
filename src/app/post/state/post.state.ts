import { PostState, postsAdaptor } from "./post.interface";

// export const initialState: Post = {
//     postLists: []
// }

export const initialState: PostState = postsAdaptor.getInitialState()