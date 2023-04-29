export interface SharedState {
    loadingInformation: LoadingInformation
}

export interface LoadingInformation {
    isLoading: boolean;
    loadingMessage: string;
}