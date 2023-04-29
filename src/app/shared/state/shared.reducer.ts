import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shared.state";
import { loadingStartAction } from "./shared.action";

const _sharedReducer = createReducer(initialState,
    on(loadingStartAction, (state, action) => {
        return {
            ...state,
            loadingInformation: action.loadingInformation
        }
    })
);

export function sharedReducer(state: any, action: any) {
    return _sharedReducer(state, action);
}