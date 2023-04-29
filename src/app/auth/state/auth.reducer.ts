import { createReducer, on } from "@ngrx/store"
import { initialState } from "./auth.state"
import { authLoginAction, loginFailedAction, loginSuccessAction } from "./auth.action"

const _authReducer = createReducer(initialState,
    on(authLoginAction, (state, action) => {
        return {
            ...state,
            loginCredentials: { ...action.loginCredentials },
            loginStatus: {
                message: 'Login Process started'
            }
        }
    }),
    on(loginSuccessAction, (state, action) => {
        return {
            ...state,
            loginStatus: {
                message: 'logged in Success'
            }
        }
    }),
    on(loginFailedAction, (state, action) => {
        return {
            ...state,
            loginStatus: {
                message: 'logged in Failed'
            }
        }
    })
)

export function authReducer(state: any, action: any) {
    return _authReducer(state, action)
}