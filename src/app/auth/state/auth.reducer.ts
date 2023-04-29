import { createReducer, on } from "@ngrx/store"
import { initialState } from "./auth.state"
import { authLoginAction } from "./auth.action"

const _authReducer = createReducer(initialState, on(authLoginAction, (state, action) => {
    return {
        ...state,
        loginCredentials: {...action.loginCredentials}
    }
}))

export function authReducer(state: any, action: any) {
    return _authReducer(state, action)
}