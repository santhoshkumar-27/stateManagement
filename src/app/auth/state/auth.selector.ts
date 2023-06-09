import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AUTH_STATE_NAME } from "./auth.state";
import { AuthState, Login } from "./auth.interface";

const authState = createFeatureSelector<AuthState>(AUTH_STATE_NAME)

export const getUsernameAndPassword = createSelector(authState, (state) => state.loginCredentials);
export const getLoginStatus = createSelector(authState, (state) => state?.loginStatus);
export const isAuthenticated = createSelector(authState, (state) => state?.loginStatus?.status);
export const getUserTokenFromState = createSelector(authState, (state) => state?.loginStatus?.status)