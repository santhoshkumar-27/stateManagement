import { AuthState } from './auth.interface'
export const AUTH_STATE_NAME = 'auth';
export const initialState : AuthState = {
    loginCredentials: {
        userName: '',
        password: ''
    },
    loginStatus: {
        status: false,
        message: 'Not logged in'
    }
}