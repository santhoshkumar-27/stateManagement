export interface AuthState {
    loginCredentials: Login;
    loginStatus: LoginStatus
}

export interface Login {
    userName: string;
    password: string;
}
export interface LoginStatus {
    status: boolean;
    message: string;
}