import { createAction, props } from "@ngrx/store";
import { Login } from "./auth.interface";

const LOGIN_START = '[Auth page] login start';
const LOGIN_SUCCESs = '[Auth page] login success';
const LOGIN_FAILED = '[Auth page] login failed';
const SIGNUP_START = '[Auth page] signup start';
const SIGNUP_SUCCESS = '[Auth page] signup success';
const SIGNUP_FAILED = '[Auth page] signup failed';
const AUTO_LOGIN = '[Auth page] auto login';
export const AUTO_LOGOUT = '[Auht page] auto logout';

export const authLoginAction = createAction(LOGIN_START, props<{loginCredentials: Login}>());
export const loginSuccessAction = createAction(LOGIN_SUCCESs, props<{redirect: boolean}>());
export const loginFailedAction = createAction(LOGIN_FAILED);
export const authSignupAction = createAction(SIGNUP_START, props<{userName: string; password: string;}>());
export const signupSuccessAction = createAction(SIGNUP_SUCCESS, props<{redirect: boolean}>());
export const signupFailedAction = createAction(SIGNUP_FAILED);
export const autoLoginAction = createAction(AUTO_LOGIN, props<{loginCredentials: Login, redirect: boolean}>());
export const autoLogoutAction = createAction(AUTO_LOGOUT);