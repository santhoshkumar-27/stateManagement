import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { Action, Counter } from "./counter.interface";
import { decrementAction, incrementAction, resetAction } from "./counter.actions";

const _counterReducer = createReducer(initialState, on(
    incrementAction, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
), on(decrementAction, (state) => {
    return {
        ...state,
        counter: state.counter - 1,
    }
}), on(resetAction, (state) => {
    return {
        ...state,
        counter: 0
    }
})
);

// export function counterReducer(state: Counter, action: Action) {
//     return _counterReducer(state, action)
// }
export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action)
}