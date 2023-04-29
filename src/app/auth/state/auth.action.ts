import { createAction, props } from "@ngrx/store";
import { Login } from "./auth.interface";

export const LOGIN_START = '[Auth page] login start';
export const LOGIN_SUCCESs = '[Auth page] login success';
export const LOGIN_FAILED = '[Auth page] login failed';
export const LOGIN_FINISHED = '[Auth page] login finished';

export const authLoginAction = createAction(LOGIN_START, props<{loginCredentials: Login}>());
export const loginSuccesAction = createAction(LOGIN_SUCCESs);