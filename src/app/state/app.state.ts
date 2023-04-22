import { Counter } from "../counter/state/counter.interface";
import { counterReducer } from "../counter/state/counter.reducer";
import { Post } from "../post/state/post.interface";
import { postReducer } from "../post/state/post.reducer";

export interface AppState {
    counter: Counter;
    post: Post;
}

export const appReducer = {
    counter: counterReducer,
    post: postReducer,
}