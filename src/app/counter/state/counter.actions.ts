import { createAction, props } from "@ngrx/store";

export const incrementAction = createAction('INCREMENT');
export const decrementAction = createAction('DECREMENT');
export const resetAction = createAction('RESET');
export const customIncrementAction = createAction('CUSTOMINCREMENTVALUE', props<{value: number}>());
export const customDecrementAction = createAction('CUSTOMDECREMENTVALUE', props<{value: number}>());
export const changeProjectNameAction = createAction('PRJECTNAMECHANGE', props<{projectName: string}>());