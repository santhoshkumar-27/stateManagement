export interface SharedState {
    loadingInformation: LoadingInformation;
    errorInformation: errorInformation;
}

export interface LoadingInformation {
    isLoading: boolean;
    loadingMessage: string;
}
export interface errorInformation {
    show: boolean;
    message: string;
    type: ErrorType;
}

export interface error {
    message: string;
    type: ErrorType;
}

export type ErrorType = 'SUCCESS' | 'FAILURE';