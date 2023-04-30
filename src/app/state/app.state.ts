import { AuthState } from "../auth/state/auth.interface";
import { authReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.state";
import { Counter } from "../counter/state/counter.interface";
import { counterReducer } from "../counter/state/counter.reducer";
import { COUNTER_STATE_NAME } from "../counter/state/counter.selector";
import { Post } from "../post/state/post.interface";
import { postReducer } from "../post/state/post.reducer";
import { POSTS_STATE_NAME } from "../post/state/post.selector";
import { SharedState } from "../shared/state/shared.interface";
import { sharedReducer } from "../shared/state/shared.reducer";
import { SHARED_STATE_NAME } from "../shared/state/shared.state";

export interface AppState {
    [COUNTER_STATE_NAME]: Counter;
    [POSTS_STATE_NAME]: Post;
    [AUTH_STATE_NAME]: AuthState;
    [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
    // counter: counterReducer,
    // posts: postReducer,
    [AUTH_STATE_NAME]: authReducer,
    // shared: sharedReducer
}