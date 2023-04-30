import { createReducer, on } from "@ngrx/store"
import { initialState } from "./auth.state"
import { authLoginAction, authSignupAction, loginFailedAction, loginSuccessAction, signupFailedAction, signupSuccessAction } from "./auth.action"

const _authReducer = createReducer(initialState,
    on(authLoginAction, (state, action) => {
        return {
            ...state,
            loginCredentials: { ...action.loginCredentials },
            loginStatus: {
                status: false,
                message: 'Login Process started'
            }
        }
    }),
    on(loginSuccessAction, (state) => {
        return {
            ...state,
            loginStatus: {
                status: true,
                message: 'logged in Success'
            }
        }
    }),
    on(loginFailedAction, (state) => {
        return {
            ...state,
            loginStatus: {
                status: false,
                message: 'logged in Failed'
            }
        }
    }),
    on(authSignupAction, (state, action) => {
        return {
            ...state,
            loginCredentials: { ...action },
            loginStatus: {
                status: false,
                message: 'Login Process started'
            }
        }
    }),
    on(signupSuccessAction, (state) => {
        return {
            ...state,
            loginStatus: {
                status: true,
                message: 'logged in Success'
            }
        }
    }),
    on(signupFailedAction, (state) => {
        return {
            ...state,
            loginStatus: {
                status: false,
                message: 'logged in Failed'
            }
        }
    }),
)

export function authReducer(state: any, action: any) {
    return _authReducer(state, action)
}