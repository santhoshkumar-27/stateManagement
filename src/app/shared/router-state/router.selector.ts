import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ROUTER_STATE_NAME, RouterStateUrl } from "./custom.serializer";
import { RouterReducerState } from "@ngrx/router-store";

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>(ROUTER_STATE_NAME);
export const getCurrentRouteState = createSelector(getRouterState, (router) => router.state)