import { SharedState } from "./shared.interface";

export const SHARED_STATE_NAME = 'shared';
export const initialState: SharedState = {
    loadingInformation: {
        isLoading: false,
        loadingMessage: 'Loading Message'
    }
}