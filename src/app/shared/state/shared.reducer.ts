import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shared.state";
import { loadingEndAction, loadingStartAction } from "./shared.action";

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
);

export function sharedReducer(state: any, action: any) {
    return _sharedReducer(state, action);
}