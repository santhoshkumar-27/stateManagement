import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post, PostList, PostState } from "./post.interface";
import { getCurrentRouteState } from "src/app/shared/router-state/router.selector";
import { RouterStateUrl } from "src/app/shared/router-state/custom.serializer";
import { postsAdaptor } from "./post.state";
export const POSTS_STATE_NAME = 'posts';
export const postsSelector = postsAdaptor.getSelectors();
// const postState = createFeatureSelector<Post>(POSTS_STATE_NAME);
const postState = createFeatureSelector<PostState>(POSTS_STATE_NAME);

export const getPostList = createSelector(postState, postsSelector.selectAll);
export const getPostEntities = createSelector(postState, postsSelector.selectEntities)
// export const getPostById = createSelector(postState, getCurrentRouteState, (state: Post, routerState: RouterStateUrl) => {
//     return state.postLists ? state.postLists.find((list: PostList) => list.id == routerState.params["id"]): null;
// })
export const getPostById = createSelector(
    getPostEntities,
    getCurrentRouteState,
    (posts, routerState: RouterStateUrl) => {
        return posts ? posts[routerState.params['id']] : null;
    })