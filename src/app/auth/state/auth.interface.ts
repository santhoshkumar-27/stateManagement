export interface AuthState {
    loginCredentials: Login;
}

export interface Login {
    userName: string;
    password: string;
}