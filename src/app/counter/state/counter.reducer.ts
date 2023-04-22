import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { Action, Counter } from "./counter.interface";
import { decrementAction, incrementAction, resetAction, customIncrementAction, customDecrementAction, changeProjectNameAction, projectNameReset } from "./counter.actions";

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
}), on(customIncrementAction, (state, action) => {
    return {
        ...state,
        counter: state.counter + action.value
    }
}), on(customDecrementAction, (state, action) => {
    return {
        ...state,
        counter: state.counter - action.value
    }
}), on(changeProjectNameAction, (state, action) => {
    return {
        ...state,
        projectName: action.projectName
    }
}), on(projectNameReset, (state) => {
    return {
        ...state,
        projectName: initialState.projectName
    }
})
);

// export function counterReducer(state: Counter, action: Action) {
//     return _counterReducer(state, action)
// }
export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action)
}