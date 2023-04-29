import { AuthState } from "../auth/state/auth.interface";
import { authReducer } from "../auth/state/auth.reducer";
import { Counter } from "../counter/state/counter.interface";
import { counterReducer } from "../counter/state/counter.reducer";
import { Post } from "../post/state/post.interface";
import { postReducer } from "../post/state/post.reducer";
import { SharedState } from "../shared/state/shared.interface";
import { sharedReducer } from "../shared/state/shared.reducer";

export interface AppState {
    counter: Counter;
    posts: Post;
    auth: AuthState;
    shared: SharedState;
}

export const appReducer = {
    counter: counterReducer,
    posts: postReducer,
    auth: authReducer,
    shared: sharedReducer
}