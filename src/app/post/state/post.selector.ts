import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post, PostList } from "./post.interface";
import { getCurrentRouteState } from "src/app/shared/router-state/router.selector";
import { RouterStateUrl } from "src/app/shared/router-state/custom.serializer";
export const POSTS_STATE_NAME = 'posts';
const postState = createFeatureSelector<Post>(POSTS_STATE_NAME);

export const getPostList = createSelector(postState, (state) => state.postLists);

export const getPostById = createSelector(postState, getCurrentRouteState, (state: Post, routerState: RouterStateUrl) => {
    return state.postLists ? state.postLists.find((list: PostList) => list.id == routerState.params["id"]): null;
})