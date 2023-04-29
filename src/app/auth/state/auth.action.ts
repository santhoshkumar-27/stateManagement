import { createAction, props } from "@ngrx/store";
import { Login } from "./auth.interface";

const LOGIN_START = '[Auth page] login start';
const LOGIN_SUCCESs = '[Auth page] login success';
const LOGIN_FAILED = '[Auth page] login failed';
const LOGIN_FINISHED = '[Auth page] login finished';

export const authLoginAction = createAction(LOGIN_START, props<{loginCredentials: Login}>());
export const loginSuccessAction = createAction(LOGIN_SUCCESs);
export const loginFailedAction = createAction(LOGIN_FAILED);