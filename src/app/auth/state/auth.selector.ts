import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AUTH_STATE_NAME } from "./auth.state";
import { AuthState, Login } from "./auth.interface";

const authState = createFeatureSelector<AuthState>(AUTH_STATE_NAME)

export const getUsernameAndPassword = createSelector(authState, (state: AuthState, props: Login) => state.loginCredentials)