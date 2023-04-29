import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shared.state";
import { errorEndAction, errorStartAction, loadingEndAction, loadingStartAction } from "./shared.action";

const _sharedReducer = createReducer(initialState,
    on(loadingStartAction, (state, action) => {
        return {
            ...state,
            loadingInformation: {
                isLoading: true,
                loadingMessage: action.message
            }
        }
    }),
    on(loadingEndAction, (state) => {
        return {
            ...state,
            loadingInformation: {
                isLoading: false,
                loadingMessage: state.loadingInformation.loadingMessage
            }
        }
    }),
    on(errorStartAction, (state, action) => {
        return {
            ...state,
            errorInformation: {
                show: true,
                message: action.error.message,
                type: action.error.type,
            }
        }
    }),
    on(errorEndAction, (state) => {
        return {
            ...state,
            errorInformation: {
                show: false,
                message: '',
                type: 'SUCCESS'
            }
        }
    }),
);

export function sharedReducer(state: any, action: any) {
    return _sharedReducer(state, action);
}